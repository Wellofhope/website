import React, { Component } from 'react';
import { Placeholder, Grid, Image } from 'semantic-ui-react'
import  "./common/wellofhope.png"
import Footer from './common/Footer'

const src = 'wellofhope.png'

// const items = [
//     {
//       childKey: 0,
//       image: 'wellofhope.png',
//       header: 'Header',
//       description: 'Description',
//       meta: 'Metadata',
//       extra: 'Extra',
//     },
//     {
//       childKey: 1,
//       image: 'wellofhope.png',
//       header: 'Header',
//       description: 'Description',
//       meta: 'Metadata',
//       extra: 'Extra',
//     },
//   ]


const Testimonials = () => (
  <React.Fragment>
  <Grid>
    <Grid.Column width={4}>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column width={9}>
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    </Grid.Column>
  </Grid>
  <Grid>
    <Grid.Column width={4}>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column width={9}>
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    </Grid.Column>
  </Grid>
  <Grid>
    <Grid.Column width={4}>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column width={9}>
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    </Grid.Column>
  </Grid>
</React.Fragment>
)

export default Testimonials