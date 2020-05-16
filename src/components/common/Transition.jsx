import React, { Component } from 'react'
import { Button, Divider, Image, Transition, Reveal } from 'semantic-ui-react'

export default class TransitionExampleTransition extends Component {
  state = { visible: true }

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))

  render() {
    const { visible } = this.state

    return (
      <div>
           <Transition visible={visible} animation='scale' duration={50}>
           <Reveal animated='move' instant>
    <Reveal.Content visible>
      <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='https://react.semantic-ui.com/images/avatar/large/chris.jpg' size='small' />
    </Reveal.Content>
  </Reveal>
        </Transition>
       
      </div>
    )
  }
}