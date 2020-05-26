import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Grid, Image,  Button, Card, Divider, Segment, Label } from 'semantic-ui-react'

class Projects extends Component {
    state = {  }
    render() {

        return (
            <React.Fragment>
                <section className="bg-light page-section" id="portfolio">
                <Segment color='blue'>
        <div className="container">
        
          <div className="row">
            <div className="col-lg-12 text-center">
            
              <h2 className="section-heading text-uppercase">Projects</h2>
              <h3 className="section-subheading text-muted">These are the projects that we have helped the community acquire.</h3>
            </div>
                                 <Divider  color='teal'/>
          </div>
          <div className="row">
               <Grid relaxed columns={4}>
                        <Grid.Column>
                        <Link className="nav-link"  to="/landandsettlement">
                        <Image  src= {require('./common/assets/img/land.JPG')} />
                        <Label basic color='blue' pointing>
                            Land And Settlement
                          </Label>
                            </Link>
                        </Grid.Column>
                        <Grid.Column>
                        <Link className="nav-link" to="/school">
                        <Image src= {require('./common/assets/img/spons.jpg')} />
                        <Label basic color='blue' pointing>
                            Sponsorship
                          </Label>
                            </Link>
                        </Grid.Column>
                        <Grid.Column>
                        <Link className="nav-link" to="/other projects">
                        <Image src= {require('./common/assets/img/food.jpg')} />
                        <Label basic color='blue' pointing>
                            Vast Projects
                          </Label>
                          </Link>
                        </Grid.Column>
                        <Grid.Column>
                        <Link className="nav-link" to="/house">
                        <Image src= {require('./common/assets/img/house.jpg')} />
                        <Label basic color='blue' pointing>
                            Housing
                          </Label>
                         </Link>
                        </Grid.Column>
                        <Grid.Column>
                        <Link className="nav-link" to="/water">
                        <Image src= {require('./common/assets/img/borehole.jpg')} />
                        <Label basic color='blue' pointing>
                            Borehole
                          </Label>
                           </Link>
                        </Grid.Column>
                </Grid>
                
          </div>
        
        </div>
        </Segment>
      </section>
            </React.Fragment>
          );
    }
}

export default Projects;
