import React, { Component } from 'react';
import { Container, Image, Divider, Message } from 'semantic-ui-react'
// import  "./common/wellofhope.png"
let listOfImages= []

const src = 'wellofhope.png'

class Water extends Component {
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../assets/website/borehole', false, /\.(png|jpe?g|svg)$/));
    }
    render() { 
        return ( 
            <React.Fragment>
                <Divider horizontal>Borehole</Divider>
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
 
export default Water;