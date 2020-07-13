import React from "react";
import { Card } from 'semantic-ui-react'
import Skycons from 'skycons-component'

import tempWasher from "../functions/tempWasher"
import skyconWasher from "../functions/skyconWasher"

// Today's Weather
const today = props =>{
  return (
    <Card.Group className="app-today" centered>
      <Card>
        <Card.Content>
          <Card.Header>
            <Skycons
            animate={true}
            iconColor='white'
            style={{width: 128, height: 128}}
            icon={skyconWasher(props.weatherDataToday.weather[0].description)}
            />
          </Card.Header>
          <Card.Meta>
            <h2>{tempWasher(props.weatherDataToday.temp.max,props.weatherDataToday.temp.min,"c")}</h2>
          </Card.Meta>
		  <Card.Meta>
            High: {tempWasher(props.weatherDataToday.temp.max,props.weatherDataToday.temp.max,"c")}  Low:  {tempWasher(props.weatherDataToday.temp.min,props.weatherDataToday.temp.min,"c")}
          </Card.Meta>
          <Card.Description>
            {props.weatherDataToday.weather[0].description}
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  );
}
export default today; 