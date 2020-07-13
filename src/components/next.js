import React from "react";
import { Card } from 'semantic-ui-react'
import Skycons from 'skycons-component'

import timeConverter from "../functions/timeConverter"
import tempWasher from "../functions/tempWasher"
import skyconWasher from "../functions/skyconWasher"

const Next = props =>{

/* List of Days to Include and their dataset*/

// As we are looking for the next five days, 
// skip 0 as that is today and work from 1, tomorrow 
// to five days hence, 6
/* WeekList Constructor */

// Container for Weather Data for Days
const daysProp = []

for (let i = 1; i < 6; i++) {
  daysProp.push(props.weatherDataNext[i]);
}

function WeekList(props) {
  const days = props.days;

  // Create ListDays list by maping the daysProp const
  const listDays = days.map(day => <ListDay key={day.dt}>{day}</ListDay>);

  /* Create nextDays element */
  // Calls the ListDay Item via the List Day List
  return (
    <Card.Group className="app-next" centered>
      {listDays}
    </Card.Group>
  );
}


/* ListDay Item */
function ListDay(props){
  return(
    <Card>
      <Card.Content>
        <Card.Header>
          {timeConverter(props.children.dt,"tomorrow")}
        </Card.Header>
        <Card.Header>
          <Skycons
          animate={true}
          iconColor='white'
          style={{width: 64, height: 64}}
          icon={skyconWasher(props.children.weather[0].description)}
          />
        </Card.Header>
        <Card.Meta>
          {tempWasher(props.children.temp.max,props.children.temp.min,"c")}
        </Card.Meta>
        <Card.Description>
          {props.children.weather[0].description}
        </Card.Description>
      </Card.Content>
    </Card>
  )
  }

/* Export Weeklest */
return(
  <WeekList days={daysProp} />
)
}
export default Next