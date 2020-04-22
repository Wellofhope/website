import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Allposts from './Allposts'

const GridExampleCelled = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
      </Grid.Column>
      <Grid.Column width={13}>
         <div className="search"><h1>Posts</h1></div> 
      <Allposts/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleCelled