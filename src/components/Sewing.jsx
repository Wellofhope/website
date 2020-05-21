import React, { Component } from 'react';
import { Container, Divider, Image,  Message } from 'semantic-ui-react'
import Gallery from 'react-grid-gallery';
import  "./common/wellofhope.png"
import '../assets/website/school/trial.png'
let listOfImages= []

class Sewing extends Component {
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../assets/website/sewing', false, /\.(png|jpe?g|svg|JPG)$/));
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
 
export default Sewing;