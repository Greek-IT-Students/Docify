import React, { Component } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Icon, IconButton, Paper, List, ListItem, ListItemIcon, ListItemText, Typography, Tooltip, withTheme } from '@material-ui/core';
import {Route} from "react-router-dom";


class solution extends Component {
    constructor(props) {
        super(props);

        this.state = {

            code: this.props.code,

        }
    }

    render() {
        return (

            <Paper style={{
                marginTop: 10,
                padding: 10,
                display: 'grid'
            }}>

               <div>
                   <Paper elevation={0}
                          style={{
                              padding: 10,
                              color: '#DDD',
                              backgroundColor: '#2b3e50',
                              fontFamily: 'Inconsolata, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
                              fontSize: 16,
                              whiteSpace: 'initial'
                          }}>
                       {this.props.code}
                   </Paper>
               </div>
            </Paper>

        );
    }
}




const Solution1 = solution;
export default Solution1;
