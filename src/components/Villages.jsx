import React, { Component, Suspense } from 'react';
import {Link} from "react-router-dom";
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
            Someone once asked me why I help women in Kenya get homes when we have people in the UNITED STATES 
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
              ... God has led me.
          </p>
          <p textAlign='center'>
               You are a woman who has just been married through an arranged marriage, you must now leave your
               own family and more into the home of your husband's family. You have not been provided with an 
               education and as far as you know you have no rights.
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
                           <Link className="nav-link"  to="/stories">
                        <Image  src= {require('./common/assets/img/land.JPG')} />
                        <Label basic color='blue'  pointing='left'>
                            Settlement stories
                          </Label>
                            </Link>
                            </Image.Group>
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