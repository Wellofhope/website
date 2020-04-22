import React, { Component } from 'react';

class Projects extends Component {
    state = {  }
    render() { 
        const portfolioLinks = [
            {
              title: 'Land/Settlement',
              caption: 'Illustration'
            },
            {
              title: 'Farm',
              caption: 'Graphic Design'
            },
            {
              title: 'Water Project',
              caption: 'Identity'
            },
            {
              title: 'Schooling',
              caption: 'Branding'
            },
            {
              title: 'Churches',
              caption: 'Website Design'
            },
            {
              title: 'Housing(old/new)',
              caption: 'Photography'
            },
            {
                title: 'Sewing Project',
                caption: 'Photography'
              },
              {
                title: 'Washroom Projects',
                caption: 'Photography'
              },
            {
              title: 'Mission Teams',
              caption: 'I love Africa!'
            }
          ]
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
            {
                portfolioLinks && portfolioLinks.map(({ title, caption }, index) => 
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={ `https://unsplash.it/350/140/?${Math.floor(Math.random(0,100) * 100)}` } alt="portfolio_img" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>{ title }</h4>
                            <p className="text-muted">{ caption }</p>
                        </div>
                    </div>
                )
            }
          </div>
        </div>
      </section>
            </React.Fragment>
          );
    }
}
 
export default Projects;