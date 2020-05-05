import React, { Component } from 'react'
import { Button, Divider, Image, Transition } from 'semantic-ui-react'

export default class TransitionExampleTransition extends Component {
  state = { visible: true }

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))

  render() {
    const { visible } = this.state

    return (
      <div>
           <Transition visible={visible} animation='scale' duration={50}>
          <Image size='small' src='https://react.semantic-ui.com/images/leaves/1.png' />
        </Transition>
        <Divider hidden />

        <Button
          content={visible ? 'Hide' : 'Show'}
          onClick={this.toggleVisibility}
        />
       
      </div>
    )
  }
}