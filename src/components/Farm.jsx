import React, { Component } from 'react';
import { Container, Divider, Image, Card } from 'semantic-ui-react'
import  "./common/wellofhope.png"
import Sewing from './Sewing'
import Food from './Food'
import Briquettes from './Briquettes'
import Goat from './Goat'

const src = 'wellofhope.png'

class Farm extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
               
          <Sewing/>
          <br/>
          <Food/>
          <br/>
          <Briquettes/>
          <br/>
          <Goat/>
          <br/>
          <Divider horizontal>End of projects</Divider>
          


            </React.Fragment>
         );
    }
}
 
export default Farm;