const chalk = require("chalk");
const inquirer = require('inquirer');
const childProcess = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const latestVersion = require('latest-version');

const create = async function (options) {
  var questions = [
    {
      name: 'name',
      message: "Project name:",
      type: 'input',
      validate: checkName
    }
  ];

  inquirer.prompt(questions)
    .then(function (answers) {
      const dir = options.dir + "/" + answers.name;
      if (fs.existsSync(dir)) {
        console.log(chalk.red("Error: ") + "folder is already exist. Please use another name or delete old folder.")
        return;
      }
      else {
        fs.mkdirSync(dir);
      }

      latestVersion('Docify')
        .then(function (libzyLibVersion) {
          const packageJson = require('../../../package.json');
          const filesToCopy = ['.babelrc', '.eslintrc', '.prettierrc', 'Docify_Example_Project.config.js', 'webpack.config.js'];
          const foldersToCopy = ['config', 'src'];

          // create folder and initialize npm

          // replace the default scripts, with the webpack scripts in package.json
          let newPckJson = {};
          newPckJson.name = answers.name;
          newPckJson.version = "0.1.0";
          newPckJson.scripts = { ...packageJson.scripts }
          newPckJson.devDependencies = { ...packageJson.devDependencies }
          newPckJson.dependencies = { ...packageJson.dependencies }
          newPckJson.dependencies["libzy-lib"] = libzyLibVersion;
          delete newPckJson.dependencies["chalk"];
          delete newPckJson.dependencies["commander"];
          delete newPckJson.dependencies["deasync"];
          delete newPckJson.dependencies["fs-extra"];
          delete newPckJson.dependencies["inquirer"];
          delete newPckJson.dependencies["latest-version"];
          const data = JSON.stringify(newPckJson, null, "\t");
          fs.writeFileSync(`${answers.name}/package.json`, data);
          console.log(chalk.green("package.json created..."));

          fs.writeFileSync(`${answers.name}/.gitignore`, "node_modules\ndist\npackage-lock.json");
          console.log(chalk.green(".gitignore created..."));

          for (let i = 0; i < filesToCopy.length; i += 1) {
            const filePath = path.join(__dirname, `../../../${filesToCopy[i]}`);
            if (fs.existsSync(filePath)) {
              fs.createReadStream(filePath)
                .pipe(fs.createWriteStream(`${answers.name}/${filesToCopy[i]}`));
              console.log(chalk.green(filesToCopy[i] + " created..."));
            }
          }

          for (let i = 0; i < foldersToCopy.length; i++) {
            fs.copySync(path.join(__dirname, '../../../' + foldersToCopy[i]), `${answers.name}/${foldersToCopy[i]}`)
            console.log(chalk.green(foldersToCopy[i] + " folder created..."));
          }

          console.log("Installing dependencies. This process could take a few minutes...");
          childProcess.execSync('npm install', {
            stdio: [0, 1, 2],
            cwd: answers.name
          });

          console.log("Dependencies installed.");
          console.log();
          console.log();
          console.log(chalk.green("Project created successfully!"));
          console.log()
          console.log("To run project:")
          console.log("\t" + chalk.green("cd " + answers.name) + " && " + chalk.green("npm start"));
        });
    });
}

function checkName(name) {
  let regex = /^[a-z][a-z0-9]+([-.][a-z0-9]+)*$/g;
  let result = name.match(regex) == name;
  return result || 'Wrong naming! Please specify a name that is contains only lowercase letters, number and - as delimeter.");'
}

exports.default = create;