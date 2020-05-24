import React, { Component } from 'react';
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
                          <Image  src= {require('./common/assets/img/background.jpg')} />
                        </Grid.Column>
                        <Grid.Column>
                          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        </Grid.Column>
                        <Grid.Column>
                          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        </Grid.Column>
                        <Grid.Column>
                          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        </Grid.Column>
                        <Grid.Column>
                          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
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