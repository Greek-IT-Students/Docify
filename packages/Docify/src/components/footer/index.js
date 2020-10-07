import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

export default class Footer extends Component {
  render() {
    return (
      <>
        <Typography variant="subtitle2" style={{color: '#65819DAA'}}>
          You can contact me on
          <a
            href="mailto:nektariosfifes12@gmail.com"
            target="_blank"
            style={{
              color: '#b9c6d2',
              textDecoration: 'none'
            }}
          >
              nektariosfifes12@gmail.com
          </a>
        </Typography>
      </>
    );
  }
}
