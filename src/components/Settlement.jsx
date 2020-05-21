import React, { Component } from 'react';
import { Container, Image, Message } from 'semantic-ui-react'
import Gallery from 'react-grid-gallery';
let listOfImages= []

class School extends Component {
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../assets/website/land', false, /\.(png|jpe?g|svg)$/));
    }
    render() { 
        return ( 
            <React.Fragment>
                  <Container> 
                  <Message color='blue' floating content='Way to go!' />
                         <Image.Group size='small'>
                  {
                    listOfImages.map(
                      (image, index) =>   
                       <Image key={index} src={image} alt="info"/>
                    )
              }

                           </Image.Group>
                 </Container>
            </React.Fragment>
         );
    }
}
 
export default School ;
