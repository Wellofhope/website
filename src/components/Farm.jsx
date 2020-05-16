import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import  "./common/wellofhope.png"

const src = 'wellofhope.png'

class Farm extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <Card.Group itemsPerRow={6}>
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
  </Card.Group>
            </React.Fragment>
         );
    }
}
 
export default Farm;