import React, { Component } from 'react';
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import  "./common/wellofhope.png"
import Footer from './common/Footer'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />


const Testimonials = () => (
  <React.Fragment>
  <Item.Group divided>
    <Item>
      <Item.Image src= {require('./common/assets/img/wellofhope.png')} />

      <Item.Content>
        <Item.Header as='a'>Alumni Name</Item.Header>
        <Item.Meta>
          <span className='cinema'>Class of 2030</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Label>Engineer</Label>
          <Label icon='student' content='2030' />
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src= {require('./common/assets/img/wellofhope.png')} />

      <Item.Content>
        <Item.Header as='a'>Alumni Name</Item.Header>
        <Item.Meta>
          <span className='cinema'>Class of 2030</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Label>Engineer</Label>
          <Label icon='student' content='2030' />
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src= {require('./common/assets/img/wellofhope.png')} />

      <Item.Content>
        <Item.Header as='a'>Alumni Name</Item.Header>
        <Item.Meta>
          <span className='cinema'>Class of 2030</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Label>Engineer</Label>
          <Label icon='student' content='2030' />
        </Item.Extra>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image src= {require('./common/assets/img/wellofhope.png')} />

      <Item.Content>
        <Item.Header as='a'>Alumni Name</Item.Header>
        <Item.Meta>
          <span className='cinema'>Class of 2030</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Label>Engineer</Label>
          <Label icon='student' content='2030' />
        </Item.Extra>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image src= {require('./common/assets/img/wellofhope.png')} />

      <Item.Content>
        <Item.Header as='a'>Alumni Name</Item.Header>
        <Item.Meta>
          <span className='cinema'>Class of 2030</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Label>Engineer</Label>
          <Label icon='student' content='2030' />
        </Item.Extra>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image src= {require('./common/assets/img/wellofhope.png')} />

      <Item.Content>
        <Item.Header as='a'>Alumni Name</Item.Header>
        <Item.Meta>
          <span className='cinema'>Class of 2030</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Label>Engineer</Label>
          <Label icon='student' content='2030' />
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
</React.Fragment>
)

export default Testimonials