import React from "react";
import { Container, Loader } from 'semantic-ui-react'

// Loading Item
const loader = props => {
  return(
    <Container inline='centered' >
      <Loader inverted active>Loading</Loader>
    </Container>
  )
}

export default loader; 