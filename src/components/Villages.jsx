import React, { Component, Suspense } from 'react';
import { Container, Image, Message } from 'semantic-ui-react'
import Loader from './common/Loader'
// import  "./common/wellofhope.png"
let listOfImages= []

class Villages extends Component {
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../assets/website/diveley village', false, /\.(png|jpe?g|svg|JPG)$/));
    }
    render() { 
        return ( 
            <React.Fragment>
                  <Container> 
                  <Message color='blue' floating content='Way to go!' />
                      <Suspense fallback={<Loader/>}>
                         <Image.Group size='small'>
                  {
                    listOfImages.map(
                      (image, index) =>   
                       <Image key={index} src={image} alt="info"/>
                    )
              }

                           </Image.Group>
                           </Suspense>
                 </Container>
            </React.Fragment>
         );
    }
}
 
export default Villages;