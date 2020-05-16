import React, { Component } from 'react';
import { Container, Divider, Header, Card } from 'semantic-ui-react'
import Gallery from 'react-grid-gallery';
let listOfImages= []

class School extends Component {
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../assets/website/housing', false, /\.(png|jpe?g|svg)$/));
    }
    render() { 
        return ( 
            <React.Fragment>
                  <Container> <Card.Group itemsPerRow={6}><Card>
                  {
                    listOfImages.map(
                      (image, index) =>    <Card> <img key={index} src={image} alt="info"></img></Card>
                    )
              }
                 </Card></Card.Group> </Container>
            </React.Fragment>
         );
    }
}
 
export default School ;
