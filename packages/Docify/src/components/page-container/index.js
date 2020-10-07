import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { withStyles } from '@material-ui/core';
import Nav from '../nav';
import { withConfig } from '../config-context';
import Solution1 from "../solution";
import { Paper , Typography , Button} from '@material-ui/core';
import { CodeBlock } from 'react-code-blocks';
import dracula from "react-code-blocks/build/cjs/themes/dracula";
import { Tabs } from "@feuer/react-tabs";

class PageContainer extends Component {

    getExerciselist(item, basePath)
    {
        return <div> <Typography variant="h6" > {item.goal} </Typography> <Typography variant="subtitle2" >{item.explanation}</Typography>    <Button variant="contained" size={"small"} color="primary" href={'/' + item.link}>
        See solution with explanation
        </Button> <hr/>
        </div>;


    }

  getMenuTreeRoute(item, basePath) {
    if (item.tree) {
      return item.tree.map(treeItem => this.getMenuTreeRoute(treeItem, basePath + "/" + item.path));
    }
    else if (item.exerciseslist){

        return  (
            <Route path={basePath + "/" + item.path} render={() => (
                <>
                    <Paper style={{
                        marginTop: 10,
                        padding: 10,
                        elevation:10
                    }}>
                        <Typography variant="h4">{item.title} </Typography>
                        <br/>
                        {item.exerciseslist.map(Item => this.getExerciselist(Item, "/" + item.path))}

                    </Paper>

                </>
            )} />
        );




    }
    else {
      return <Route path={basePath + "/" + item.path} component={item.component} />;
    }
  }
  getExercisesTreeRoute(item, basePath) {


    return  (
        <Route path={ basePath + "/" + item.path} render={() => (
        <>
             <Paper style={{
                 marginTop: 10,
                 padding: 10,
                elevation:10
             }}>
                 <h1> {item.title} </h1>

                 <h2> Sample Solution </h2>

                 <CodeBlock
                     language={item.language}
                     showLineNumbers={true}
                     text={item.solutioncode}
                     theme={dracula}
                     wrapLines={true}
                     codeblock
                 />
                 <h2>Explanation theory</h2>
                 <p>Test explanation</p>
             </Paper>
        </>
    )} />
    );



  }

  getRoute = (item) => {
    if (item.component) {
      return <Route exact path={"/" + item.path} render={props => <item.component {...props} data={item.data} />} />
    }
    else if(item.exercises){
      return (
          <Route path={"/" + item.path} render={() => (
              <>

                <div className={this.props.classes.page}>
                  {item.exercises.map(Item => this.getExercisesTreeRoute(Item, "/" + item.path))}
                </div>
                <div className={this.props.classes.ads} style={{ width: this.props.isMenuOpen ? 240 : 0, marginLeft: this.props.isMenuOpen ? 20 : 0 }}>

                </div>
              </>
          )} />
      );


    }
    else {
      return (
          <Route path={"/" + item.path} render={() => (
              <>
                <div className={this.props.classes.nav} style={{ width: this.props.isMenuOpen ? 240 : 0, marginLeft: this.props.isMenuOpen ? 20 : 0 }}>
                    <Tabs 
                        activeTab={{
                            id: "tab1"
                        }}
                    >
                        <Tabs.Tab   id="tab1"  title="Examples">
                            <Nav basePath={item.path} tree={item.tree} />
                        </Tabs.Tab>
                        <Tabs.Tab  id="tab2" title="Theory">
                            <Nav basePath={item.path} tree={item.tree2} />
                        </Tabs.Tab>
                    </Tabs>
                </div>
                  <div className={this.props.classes.nav2} style={{ width: this.props.isMenuOpen ? 240 : 0, marginLeft: this.props.isMenuOpen ? 1 : 0 }}>
                      <a href="/"><img src={item.image1} style={{width:30}}/></a>
                      <a href="/"><img src={item.image2} style={{width:30}}/></a>
                  </div>
                <div className={this.props.classes.page}>
                  {item.tree.map(treeItem => this.getMenuTreeRoute(treeItem, "/" + item.path))}
                    {item.tree2.map(treeItem => this.getMenuTreeRoute(treeItem, "/" + item.path))}
                </div>
                <div className={this.props.classes.ads} style={{ width: this.props.isMenuOpen ? 240 : 0, marginLeft: this.props.isMenuOpen ? 20 : 0 }}>

                </div>
              </>
          )} />
      );
    }
  }

  render() {
    return (
        this.props.config.menuTree.map(item => this.getRoute(item))
    );
  }
}


const styles = theme => ({
    nav: {
        transition: 'all ease 300ms',
        width:'max-content',
        flexShrink: 0,
        backgroundColor: 'white',
        maxWidth: 227,
        height: 'calc(100% - 40px)',
        overflow: 'hidden',
        borderRadius: 5,
        margin: '20px 0px 20px 0px',
    },
    nav2: {
        transition: 'all ease 300ms',
        flexShrink: 0,
        backgroundColor: 'white',
        maxWidth: 30,
        height: 'calc(100% - 40px)',
        overflow: 'hidden',
        borderRadius: 5,
        margin: '20px 1px 20px 2px',
        width:'auto'
    },
  ads: {
    transition: 'all ease 300ms',
    flexShrink: 0,
    backgroundColor: 'white',
    minWidth: 240,
    height: 'calc(100% - 40px)',
    overflow: 'hidden',
    borderRadius: 5,
    margin: '20px 0px 20px 0px',
  },
  page: {
    flex: '1 0 auto',
    flexShrink: 'inherit',
    maxWidth: 960,
    height: 'calc(100% - 40px)',
    margin: 'auto',
    padding: '0px 20px',
    '& @media screen and (max-width: 767px)': {
      padding: '0px 5px'
    }
  }
});

export default withConfig(withStyles(styles, {withTheme: true})(PageContainer))
