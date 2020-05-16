import React, { Component } from 'react';
import { Container, Divider, Header, Card } from 'semantic-ui-react'
import Gallery from 'react-grid-gallery';
import  "./common/wellofhope.png"
import '../assets/website/school/trial.png'

const  src = <img src= {require("../assets/website/school/trial.png")}/>

class Sewing extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Container> 
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
  </Card.Group></Container>
            </React.Fragment>
         );
    }
}
 
export default Sewing;