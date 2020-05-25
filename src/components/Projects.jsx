import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Grid, Image,  Button, Card, Divider, Placeholder } from 'semantic-ui-react'

class Projects extends Component {
    state = {  }
    render() {

        return (
            <React.Fragment>
                <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Projects</h2>
              <h3 className="section-subheading text-muted">These are the projects that we have helped the community acquire.</h3>
            </div>
          </div>
          <div className="row">
               <Grid relaxed columns={4}>
                        <Grid.Column>
                        <Link className="nav-link" to="/landandsettlement">
                        <Image  src= {require('./common/assets/img/background.jpg')} />
                            </Link>
                        </Grid.Column>
                        <Grid.Column>
                        <Link className="nav-link" to="/school">
                        <Image src= {require('./common/assets/img/spons.jpg')} />
                            </Link>
                        </Grid.Column>
                        <Grid.Column>
                        <Link className="nav-link" to="/other projects">
                        <Image src= {require('./common/assets/img/food.jpg')} />
                          </Link>
                        </Grid.Column>
                        <Grid.Column>
                        <Link className="nav-link" to="/house">
                        <Image src= {require('./common/assets/img/house.jpg')} />
                         </Link>
                        </Grid.Column>
                        <Grid.Column>
                        <Link className="nav-link" to="/gallery">
                        <Image src= {require('./common/assets/img/donations.jpg')} />
                           </Link>
                        </Grid.Column>
                </Grid>
          </div>
        </div>
      </section>
            </React.Fragment>
          );
    }
}

export default Projects;
