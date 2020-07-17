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
                  <h4>2002</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                  In this year the Lord called me to serve Him through the widows' ministry which later came to be known as, 
                    "<Label color='blue'>THE WELL OF HOPE INTERNATIONAL</Label>". This came to me in form of a dream. In that dream I
                    was dead and I could see all that was happening. I saw my family and friends preparing to lay me to rest.
                  When I woke up from my dream, I was changed Zipporah.
                  </p>
                  <Header><Label color='violet'>ZIPPORAH KAMAU</Label></Header>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  {/* <h4>2002</h4> */}
                  <h4 className="subheading">Birth Of Well Of Hope</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                   The Lord helped me to initiate "<Label color='blue'>THE WELL OF HOPE INTERNATIONAL</Label>" which has touched,
                   changed and uplifted many lives. I ma grateful to God that I am still dedicated to our family business and at 
                   the same time shrewd and focused in my mission to uplift and bring hope to the lives of the widows. Through the 
                   support I get from my husband Nathaniel who has vast experience in the ministering the word of God, we have continued 
                   to witness the Lord's blessings in our marriage as we touch the lives of the less fortunate people in our society.
                  </p>
                  <Header><Label color='violet'>ZIPPORAH KAMAU</Label></Header>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4> 2012</h4>
                  <h4 className="subheading">Housing Project</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    The NC3 group heard about our mission to build houses and came prepared to build two houses
                    Zipporah and her husband were ready to build one house. The money was handed to Zipporah and Nat in their summer
                    trip to the USA . After building one house they were left with some money which they topped up with their own 
                    money and built another one.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  {/* <h4>July 2014</h4> */}
                  <h4 className="subheading">Teams</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    There are always mission trips to Kenya mainly from two groups the <Header><Label color='purple'>VIRGINIA TEAM</Label></Header> and the 
                    <Header><Label color='teal'>OHIO TEAM</Label></Header>. They mainly come to see how the widows are doing and what is needed to better 
                    their lives
                  </p>
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