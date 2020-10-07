import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Button, Typography, withStyles, Paper, Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import { withConfig } from '../config-context';
import { Button  as button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';

class MainPageInner extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.topBar}>
          <div className={this.props.classes.topBarContent}>
            {this.props.config.logoImage &&
              <img src={this.props.config.logoImage} alt={this.props.config.title} className={this.props.classes.logoImage}/>
            }
            <Typography variant="h2" className="text" style={{ color: 'white' }}>{this.props.config.title}</Typography>
            <Typography variant="body1" className="text" style={{ color: 'white' }}>{this.props.config.subTitle}</Typography>
            <br/>
            
            <div style={{ padding: 20 }}>
              <a href={this.props.config.github} >
                <img alt="GitHub stars" src={"https://img.shields.io/github/stars/" + this.props.config.githubShort + ".svg?style=social"}></img>
              </a>
            </div>
          </div>
        </div>
        <div className={this.props.classes.features}>
          <Grid container spacing={0}>
            {this.props.data.features.map(feature => (
              <Grid  item xs={4} sm={4} md={4} lg={4} className={this.props.classes.feature}>
                <Paper style={{padding:'4px'}} className={this.props.classes.featureContent}>
                  <div style={{display:'block',maxWidth:'45%',boxSizing:'borderbox',fontSize:'16px',padding:'6px'}}><Typography variant="h6"> {feature.category}</Typography></div>
                  <div style={{display:'flex',fontSize:'1rem',padding:'2px',fontWeight:400,width:'auto',flexWrap:'wrap',flexDirection:'row'}}>
                    {feature.subfeatures.map(subfeature => (
                    <Card style={{ maxWidth: '45%',marginLeft:'5px',marginBottom:'5px',height:'fit-content',
                      flex: '1 1 160px',
                      maxheight:'200px',flexWrap:'wrap'}} variant="outlined">

                        <Typography className={this.props.classes.title} color="textSecondary" gutterBottom>
                          {subfeature.title}
                        </Typography>
                        <Typography variant="subtitle2" component="p">
                          {subfeature.description}
                        </Typography>


                      <a href={subfeature.link}><button  xs  style={{width:'fit-content',height:'fit-content',fontSize:'11px'}}><i className="fas fa-table" />Examples/Theory</button></a>

                    </Card>
                        ))}
                  </div>
                </Paper>
              </Grid>
            ))}

          </Grid>
        </div>
      </div>
    );
  }
}


const styles = theme => ({
  root: {
    width: '100%',
  },
  topBar: {
    display: 'table',
    width: '100%',
    paddingBottom: 10,
    backgroundColor: theme.palette.primary.main,
  },
  topBarContent: {
    display: 'table-cell',
    height:'fit-content',
    verticalAlign: 'middle',
    textAlign: 'center',
    '& .text': {
      color: 'white',
      marginBottom: 10,
    }
  },
  topBarButton: {
    width: 150,
    color: '#FFFFFF99',
    textTransform: 'none',
    border: '1px solid #FFFFFF99',
    transition: 'all ease 300ms',
    '&:hover': {
      color: '#FFF',
      backgroundColor: '#DDDDDD22',
    },
  },
  logoImage: {
    height: 200
  },
  features: {
    margin: 'none',
    
  },
  feature: {
    padding: '15px 5px',
  },
  featureContent: {
    width:'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    height: '100%',
    backgroundColor: 'white',
    '& .title': {
      color: '#65819D',
      padding: 5,
    },
    '& .text': {
      color: '#65819D99',
      padding: '5px 5px 0',
      flex: 1,
    },
    root2: {
      maxWidth: '49%',
      flex: '1 1 160px',
      maxheight:'200px',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  },
  featureActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  featureButton: {
    textTransform: 'none',
    color: '#65819D',

  }
});


const MainPage = withStyles(styles, { withTheme: true })(withConfig(MainPageInner));
export default MainPage;
