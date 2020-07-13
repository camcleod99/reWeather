import React from "react";
import { Container, Header } from 'semantic-ui-react'
// timeConverter function 
import timeConverter from "../functions/timeConverter"

const Location = props =>{
  return( 
      <Container className="app-location" textAlign="center">
        <Header as="h1">{props.locationData}</Header>
        <Header as="h2">{timeConverter(props.timeData,"today")}</Header>
      </Container>
  )
}
export default Location; 