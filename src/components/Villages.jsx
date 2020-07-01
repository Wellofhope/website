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
               education and as far as you know you have no rights. You have children and along the way you 
               get sick. Your husband succumbs to the sickness and his family now fears you. There are no 
               social programs. There are no shelters. You have no education . You scrape together $5 a month 
               for rent in a one room, dirt floor, tin shack. You scrape together a little money for some maize
               for you and your children. You may have done this for more than 15 years!
          </p>
          <p textAlign='center'>
               As I look at these ladies in the eyes I see their utter hopelessness and my heart breaks. Compared to them I have 
               so much and they have absolutely nothing. How can I not be moved to help? 
          </p>
          <p textAlign='center'>
               It only takes a small plot of land, small home ($1,700), a small garden, a few chickens, a water tank(much of
               this provided by our discarded shoes which we ship each year). Now when I go to visit I see JOY. I see friendships
               bloom. I see HOPE. I see lives changed.
          </p>
          <Header><Label color='violet'>LYNN DIVELEY</Label></Header>
          </Container>
        </Item.Description>
      </Modal.Description>
    </Modal.Content>
  </Modal>
      </Card.Content>
 
      <Divider/>
      <Container>
            
            <p>
           Building a house in Kenya is an amazing privilege! ...
          </p>
      
          </Container>
      <Card.Content extra>
                      
                      <Modal color='violet' trigger={<Button>Click for more</Button>}>
                    <Modal.Header><Label color='violet'>Nancy Flory</Label></Modal.Header>
                    <Modal.Content image>
                      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                      <Modal.Description>
                        <Item.Description>
                          <Container>
                            
                            <p>
                            <Header as='h3' color='blue' textAlign='center'> Part of Christ's Body </Header>
                          </p>
                          <p textAlign='center'>
                              ... God has led me.
                          </p>
                          <p textAlign='center'>
                               ...To see the appreciation on the face of a widow who has left her little shack of rusty
                               tin and stcks and move into a sturdy 3 room home made from lumber and corrugated tin and 
                               hearing her praise to the LORD for providing, is priceless. The homes are built on 
                               approximately 1/8th acre, they are the proud owners of the land that has been purchased from
                               the proceeds of the shoe containers that are sent from America.
                          </p>
                          <p textAlign='center'>
                               Shoes we no longer want are bagged and tied together and around 27 thousand pair of shoes per 
                               container are sold to vendors. With this money land is purchased an plotted off into sections
                               to give 12 widows per acre of a little plot of land to put a home one they can call their own.
                          </p>
                          <p textAlign='center'>
                               It also has been a blessing to be involved with the child sponsorship program for these ladieschildren.
                          </p>
                          <p textAlign='center'>
                               Thank you.... all you faithful sponsors who bless these children by providing fuunds so they can attend
                               school. God takes care of His children all over the globe.
                          </p>
                          <p textAlign='center'>
                          <Modal.Header><Label basic color='violet'>Luke 12:48 says 'To whom much is given, much is 
                          required'. </Label></Modal.Header>We are His hands and feet and it is a true blessing to be 
                          part of Christ's body in this way
                          </p>
                          <Header><Label color='violet'>NANCY FLORY</Label></Header>
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