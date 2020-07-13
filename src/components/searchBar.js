import React, { Component } from 'react'
import { Icon, Input, Button, Container } from 'semantic-ui-react'

class SearchBar extends Component {

  constructor(Props) {
    super();
    this.state ={
      selectedValue : null
    }
  }
  
  // Call handleSelect function in App.js and pass on value of selection
  handleSelect(e, value){
    this.props.handleSelect(value.value);
  }

  render() {
    return (
      <Container className="app-search" textAlign="center">
        <Input placeholder ='Get the weather for your location' />
      </Container>
    )
  }
}

export default SearchBar
