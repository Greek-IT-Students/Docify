const childProcess = require('child_process');
const fs = require('fs-extra');
const gulp = require('gulp');
var minimist = require('minimist');

var knownOptions = { string: 'version' };
var options = minimist(process.argv.slice(2), knownOptions);

gulp.task('publish', function () {
  const command = "npm publish --access=public"

  childProcess.execSync(command, { stdio: [0, 1, 2], cwd: './packages/Docify_Example_Project/' });
  childProcess.execSync(command, { stdio: [0, 1, 2], cwd: './packages/Docify_Example_Project-lib/' });
});

gulp.task('version', function () {
  const newVersion = options.version;
  if (!newVersion) {
    console.error('Please specify version parameter!');
    return;
  }

  updateVersion('./packages/Docify_Example_Project/package.json', newVersion);
  updateVersion('./packages/Docify_Example_Project-lib/package.json', newVersion);
});

gulp.task('versions', function () {
  const print = (project) => {
    console.log(project + ": " + require('./packages/' + project + '/package.json').version);
  }

  print('Docify_Example_Project');
  print('Docify');
});

const updateVersion = (path, version) => {
  const package = require(path);
  console.log(package.name + " old version is " + package.version);

  package.version = version;
  if (package.dependencies["Docify"])
    package.dependencies["Docify"] = version;

  const data = JSON.stringify(package, null, "\t");
  fs.writeFileSync(path, data);
}