import React from "react";
import logo from '../assets/img/poweredby.png'
import { Grid,Image } from 'semantic-ui-react'

// Loading Item
const Footer = props => {
  return(
  <Grid columns={1} textAlign="center">
    <Grid.Row>
      <Grid.Column>
        <Image src={logo} size='small' centered />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  )
}

export default Footer; 