import React, { Component } from 'react';
import { Container, Image, Divider, Message, Pagination } from 'semantic-ui-react'
import Gallery from 'react-grid-gallery';
let listOfImages= []

class School extends Component {
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../assets/website/dinner', false, /\.(png|jpe?g|svg|JPG)$/));
    }
    render() { 
        return ( 
            <React.Fragment>
                  <Container> 
                  <Divider color='blue' horizontal>Student sponsorships</Divider>
                  <Message color='blue' floating content='Way to go!' />
                         <Image.Group size='small'>
                         
                  {
                    listOfImages.map(
                      (image, index) =>   
                       <Image key={index} src={image} alt="info"/>
                    )
              }

                           </Image.Group>
                           <Pagination defaultActivePage={1}
                                            firstItem={null}
                                            lastItem={null}
                                            pointing
                                            secondary
                                            totalPages={3} />
                 </Container>
            </React.Fragment>
         );
    }
}
 
export default School ;
