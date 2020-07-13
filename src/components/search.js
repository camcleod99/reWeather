import React, { Component } from 'react'
import { Dropdown, Container } from 'semantic-ui-react'

// Data Source
const source =  [
  {
      key:1,
      text: 'Bishopbriggs, Glasgow',
      value: '55.901,-4.232'
  },
  {
      key:2,
      text: 'Bloomsbury, London',
      value: '51.522,-0.133'
  },
  {
      key:3,
      text: 'Amsterdam Nieuwmarkt',
      value: '52.373,4.9'
  },
  {
      key:4,
      text: 'New York City, New York',
      value: '40.765,-73.988'
  }
]

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
        <Dropdown
          placeholder='Select a Location'
          fluid
          search
          selection
          options={source}
          onChange={this.handleSelect.bind(this)}
        />
      </Container>
    )
  }
}

export default SearchBar