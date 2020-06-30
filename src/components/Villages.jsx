import React, { Component, Suspense } from 'react';
import { Container, Image, Modal, Card, Button, Header, Item, Label, Message, Divider } from 'semantic-ui-react'
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
            
            <p>
            Someone once asled me why I help women in Kenya get homes when we have people in the UNITED STATES 
              who need homes . I say it is where ...
          </p>
      
          </Container>
                  <Container> 
                  <Card.Content extra>
                      
      <Modal color='violet' trigger={<Button>Click for more</Button>}>
    <Modal.Header><Label color='violet'>Lynn Diveley</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Item.Description>
          <Container>
            
            <p>
            <Header as='h3' color='blue' textAlign='center'> Why Do I build Homes For Widows in Kenya? </Header>
          </p>
          <p textAlign='center'>
              
          </p>
          <Header><Label color='violet'>LYNN DIVELEY</Label></Header>
          </Container>
        </Item.Description>
      </Modal.Description>
    </Modal.Content>
  </Modal>
      </Card.Content>
      <Divider/>
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