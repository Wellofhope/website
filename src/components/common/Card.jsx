import React from 'react'
import { Button, Card, Divider, Icon } from 'semantic-ui-react'

const CardExampleGroups = () => (
  <Card.Group>
    <Card color='blue'>
      <Card.Content color='blue'>
        
        <Card.Header> <div className='ui two buttons'>
          <Button color='blue'>
          <Icon name='building'/>Address
          </Button>
        </div></Card.Header>
        <Divider />

        {/* <Card.Meta>Friends of Elliot</Card.Meta> */}
        <Card.Description>
            <Icon name='building' color='blue'/>THE NOOK HOUSE, KISERIAN TOWN,
                     KISERIAN, NAIROBI, KENYA
        </Card.Description>
        <br/>
        <Card.Description>
            <Icon name='envelope' color='blue'/>P.o Box 391  00206 Kajiado,
                                     Kenya.

        </Card.Description>
      </Card.Content>
    </Card>
    <Card color='red'>
      <Card.Content color='red'>

        <Card.Header> <div className='ui two buttons'>
          <Button color='red'>
          <Icon name='at'/>Email Us Through
          </Button>
        </div></Card.Header>
        <Divider />

        {/* <Card.Meta>New User</Card.Meta> */}
        <Card.Description color='blue'>
            <Icon name='at' color='red'/>wellofhopeinternational@yahoo.co.uk
        </Card.Description>
        <br/>
        <Card.Description>
            <Icon name='at' color='red'/>
        </Card.Description>
      </Card.Content>
    </Card>
    <Card color='green'>
      <Card.Content>
        <Card.Header>   <div className='ui two buttons'>
          <Button  color='green'>
          <Icon name='phone'/> Phone Numbers
          </Button>
        </div></Card.Header>
        <Divider />

        {/* <Card.Meta>Cell Phone</Card.Meta> */}
        <Card.Description>
        <Icon name='phone' color='green' />(+254) 712 256 610
        </Card.Description>
        <br/>
        {/* <Card.Meta>Tel.</Card.Meta> */}
        <Card.Description>
        <Icon name='text telephone' color='green'/>(+254) 713510766
        </Card.Description>
       
      </Card.Content>
    </Card>
  </Card.Group>
)

export default CardExampleGroups