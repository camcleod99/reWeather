import React from "react";
import { Container, Loader, Header, Icon } from 'semantic-ui-react'

// Error Item
const loader = props => {
  console.log(props)
  return(
    <Container inline='centered' >
      <Loader/>
      <Header as='h1'>Error</Header>
      <Icon.Group size='huge'>
        <Icon size='big' name='circle outline' />
        <Icon color="red" name='close' />
      </Icon.Group>
      <p>Location: {props.errorLocation}</p>
      <p>Message: {props.errorData.message}</p>
    </Container>
  )
}

export default loader; 