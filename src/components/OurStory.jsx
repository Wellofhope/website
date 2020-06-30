import React, { Component } from 'react';
import { Grid, Image, Container, Header, Label, Divider, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class OurStory extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <Header as='h1' icon textAlign='center'>
                    {/* <Icon name='users' circular /> */}
                    <Header.Content> <Header as='h1' color='blue'> OPPORTUNITY TO TOUCH LIVES </Header></Header.Content>
                    </Header>
                    <Divider />
                </div>
                <Grid>
                    <Grid.Column width={4}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={9}>
                    <Container textAlign='justified'>
            
                            <p>
                            "<Label basic color='violet' as='h1'>For</Label> if you remain silent at this time,
                            relief and deliverance for the Jews will arise from another place, but you and your
                            father's family will perish, and He knows but that you have come to royal position
                            for such a time as this" (ESTHER 4-14)
                            </p>
                            <p>
                               I believe the Lord has spared my life in order to use me to bring relief and deliverance
                               to the widows in Kenya. We have been given an opportunity to preach the love of God to 
                               the poor by touching lives. 
                            </p>
                            <p>
                               There is no Greater joy than to see widows dignity being restored. Well of Hope has given
                               me a platform to preach the Gospel of Jesus Christ to the world through showing the testimonies
                               what the Lord has done to the widows. I am humbled to serve in this ministry.
                            </p>
                            <Header><Label color='violet'>ZIPPORAH KAMAU</Label></Header>
                        
                     </Container>
                    </Grid.Column>
                </Grid>
                 <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Journey</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
              <h4>Dawn
                  <br/>Of Our
                  <br/>Story!</h4>
                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2012</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2014</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
               <Link className="nav-link" to=""> <h4>Be Part
                  <br/>Of Our
                  <br/>Story!</h4></Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

            </React.Fragment>
         );
    }
}
 
export default OurStory;