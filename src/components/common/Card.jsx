import React from 'react'
import { Button, Card, Divider, Icon } from 'semantic-ui-react'

const CardExampleGroups = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        
        <Card.Header> Address</Card.Header>
        <Divider />

        {/* <Card.Meta>Friends of Elliot</Card.Meta> */}
        <Card.Description>
            <Icon name='building'/>THE NOOK HOUSE, KISERIAN TOWN,
                     KISERIAN, NAIROBI, KENYA
        </Card.Description>
        <br/>
        <Card.Description>
            <Icon name='envelope'/>P.o Box 391  00206 Kajiado,
                                     Kenya.

        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>

        <Card.Header>Email Us Through</Card.Header>
        <Divider />

        {/* <Card.Meta>New User</Card.Meta> */}
        <Card.Description>
            <Icon name='at'/>SUPPORT@WELLOFHOPEINT.ORG
        </Card.Description>
        <br/>
        <Card.Description>
            <Icon name='at'/>info@wellofhopeint.org
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Card.Header>  Phone Numbers</Card.Header>
        <Divider />

        {/* <Card.Meta>Cell Phone</Card.Meta> */}
        <Card.Description>
        <Icon name='phone'  />(+254) 712 256 610
        </Card.Description>
        <br/>
        {/* <Card.Meta>Tel.</Card.Meta> */}
        <Card.Description>
        <Icon name='text telephone' />(+254) 712 256 610
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default CardExampleGroups