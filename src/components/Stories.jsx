import React, { Component } from 'react';
import {Icon, Grid, Card, Button, Header, Container, Modal, Image, Item, Label, Divider, CardGroup } from 'semantic-ui-react'

class Stories extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                 <div>
    <Header as='h1' icon textAlign='center'>
      <Label icon='home' circular />
      <Header.Content as='h5'>HOUSE BENEFICIARIES</Header.Content>
    </Header>
    <Divider/>
  </div>
                <CardGroup>

                <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src= {require('./common/assets/img/wellofhope.png')} 
        />
        <Item.Header as='a' >NAME:  
        <br/>
        <Label color='green'>JANE WANJIKU</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>PLOT NO:  
          <br/> 
          <Label icon='home' content='B-001'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>RESIDENCE: 
           <br/>
            <Label>SETTLEMENT B(DIVELEY VILLAGE)</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><span>VILLAGE: <Label color='violet'>DIVELEY VILLAGE</Label></span></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      
      <Modal.Description>
        <Header><Label color='green'>JANE WANJIKU</Label></Header>
        <Item.Description>
          <Container>
          <Grid celled>
    <Grid.Row>
     
      <Grid.Column width={13}>
      <Item.Extra>
      <div className='ui two buttons'>
            <span className='cinema'> <Label> LOCATION:  </Label><Label as='a' color='yellow'>DAM AREA</Label>
            </span>
            
        </div>
            </Item.Extra>
            <br/>
            <Item.Extra>
            <span className='cinema'>AGE:     <Label>37 YEARS OLD</Label></span>
        </Item.Extra>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
      <span className='cinema'>DONORS: 
           <br/>
            </span>
        <Image src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
        <Header><Label color='olive'>Edd and Mindy Morrison</Label></Header>
      </Grid.Column>
      <Grid.Column width={10}>
      <Container>
            
            <p textAlign='center'>
             I thank God for Ed and Mindy Morrison who are my sponsors. They built my house. They
             are also sponsoring my children's education. In addition, they bought a chicken coop 
             and a toilet for me. I thank God every day for the care I have received from WELL OF HOPE.
          </p>

          <p textAlign='center'>
              Nat and Zipporah supported me even when my family and friends turned their backs on me. For that I 
              pray that God would richly bless them. May God's favor shine over THE WELL OF HOPE teamhere in Kenya 
              and in other parts of the world. May He expand their territories so that they will be able to reach
              many more needy people.
          </p>
      
          </Container>
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src= {require('./common/assets/img/land.JPG')} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
      
          </Container>
        </Item.Description>
      </Modal.Description>
    </Modal.Content>
  </Modal>
      </Card.Content>
    </Card>
                <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src= {require('./common/assets/img/wellofhope.png')} 
        />
        <Item.Header as='a' >NAME:  
        <br/>
        <Label color='green'>ALICE NJERI</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>PLOT NO:  
          <br/> 
          <Label icon='home' content='B-13'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>RESIDENCE: 
           <br/>
            <Label>SETTLEMENT B(DIVELEY VILLAGE)</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><span>VILLAGE: <Label color='violet'>DIVELEY VILLAGE</Label></span></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      
      <Modal.Description>
        <Header><Label color='green'>ALICE NJERI</Label></Header>
        <Item.Description>
          <Container>
          <Grid celled>
    <Grid.Row>
     
      <Grid.Column width={13}>
      <Item.Extra>
      <div className='ui two buttons'>
            <span className='cinema'> <Label> LOCATION:  </Label><Label as='a' color='yellow'>DAM AREA</Label>
            </span>
            
        </div>
            </Item.Extra>
            <br/>
            <Item.Extra>
            <span className='cinema'>AGE:     <Label>69 YEARS OLD</Label></span>
        </Item.Extra>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
      <span className='cinema'>DONORS: 
           <br/>
            </span>
        <Image src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
        <Header><Label color='olive'>Vallary and Dannielle</Label></Header>
      </Grid.Column>
      <Grid.Column width={10}>
      <Container>
            
      <p textAlign='center'>
             A friend told me about a village called Lemaloi where I could lease land annually for 1000Kshs per acre.
             I was able to lease two acres where I brought up my children. She also told me of a fellowship meeting for 
             widows at Mlimani. I attended the next meeting. These meetings really strengthened me because I found a 
             place where I could relate with people who understood my epxeriences.
          </p>

          <p textAlign='center'>
              In one of the meetings, Nat called out a list of the people who were going to benefit by getting land.
              I was among them. Words can't really explain what joy filled my heart. I had finally found a place to 
              call home. I am happy for the toilet, chicken coop and the land that was given to me.
              No words can match what I feel when I think of Nat and Zipporah and what they have done for my family.
              My prayer is that God will forever bless them.
          </p>
      
          </Container>
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
      
          </Container>
        </Item.Description>
      </Modal.Description>
    </Modal.Content>
  </Modal>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src= {require('./common/assets/img/wellofhope.png')} 
        />
        <Item.Header as='a' >NAME:  
        <br/>
        <Label color='green'>LYDIAH WANJIRU</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>PLOT NO:  
          <br/> 
          <Label icon='home' content='B-14'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>RESIDENCE: 
           <br/>
            <Label>SETTLEMENT B(DIVELEY VILLAGE)</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><span>VILLAGE: <Label color='violet'>DIVELEY VILLAGE</Label></span></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      
      <Modal.Description>
        <Header><Label color='green'>LYDIAH WANJIRU</Label></Header>
        <Item.Description>
          <Container>
          <Grid celled>
    <Grid.Row>
     
      <Grid.Column width={13}>
      <Item.Extra>
      <div className='ui two buttons'>
            <span className='cinema'> <Label> LOCATION:  </Label><Label as='a' color='yellow'>DAM AREA</Label>
            </span>
            
        </div>
            </Item.Extra>
            <br/>
            <Item.Extra>
            <span className='cinema'>AGE:     <Label>N/A</Label></span>
        </Item.Extra>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
      <span className='cinema'>DONORS: 
           <br/>
            </span>
        <Image src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
        <Header><Label color='olive'>Chami, Bethani and Holly</Label></Header>
      </Grid.Column>
      <Grid.Column width={10}>
      <Container>
            
      <p textAlign='center'>
             I was so overwhelmed by the love of Nat and Zipporah had for us. Through this love, I learned of Christ and 
             gave my life to Him. My life has never been the same. I had lost all hope in life, but regained it. I felt
             strengthened every time I listened to the testtimonies of other group members of what God was doing in their 
             lives. The book of Habakkuk 2:3 states 'for a revelation awaits an appointed time; it speaks of the end and will
             not prove false.
          </p>

          <p textAlign='center'>
             Though it may linger, wait for it; it will certainly come and will not delay.' God showered me with blessings,
             just at the right time. I was given land and a house was built on it. I remember I sat on the floor and cried like
             a baby, thanking God. I pray that the Lord will bless you and your family for generations to come
          </p>
      
          </Container>
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
      
          </Container>
        </Item.Description>
      </Modal.Description>
    </Modal.Content>
  </Modal>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src= {require('./common/assets/img/wellofhope.png')} 
        />
        <Item.Header as='a' >NAME:  
        <br/>
        <Label color='green'>PENINAH NJOKI</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>PLOT NO:  
          <br/> 
          <Label icon='home' content='B-006'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>RESIDENCE: 
           <br/>
            <Label>SETTLEMENT B(DIVELEY VILLAGE)</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><span>VILLAGE: <Label color='violet'>DIVELEY VILLAGE</Label></span></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      
      <Modal.Description>
        <Header><Label color='green'>PENINAH NJOKI</Label></Header>
        <Item.Description>
          <Container>
          <Grid celled>
    <Grid.Row>
     
      <Grid.Column width={13}>
      <Item.Extra>
      <div className='ui two buttons'>
            <span className='cinema'> <Label> LOCATION:  </Label><Label as='a' color='yellow'>DAM AREA</Label>
            </span>
            
        </div>
            </Item.Extra>
            <br/>
            <Item.Extra>
            <span className='cinema'>AGE:     <Label>45 YEARS OLD</Label></span>
        </Item.Extra>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
      <span className='cinema'>DONORS: 
           <br/>
            </span>
        <Image src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
        <Header><Label color='olive'>Randy and Sarah Jenkins</Label></Header>
      </Grid.Column>
      <Grid.Column width={10}>
      <Container>
            
      <p textAlign='center'>
             I met Nat through a friend who introduced me to him. M y main aim for visiting Nat was to get sponsors to
             support my children through school. I did not know that they were building houses for widows. After we finished 
             talking , my name was written on a list for those he had scheduled to become new recruits.
          </p>

          <p textAlign='center'>
             I was given land on August 13, 2012; this day will forever be etched in my memory because it is when my life took
             a turn for the better. I was also given a solar lantern that i cherish a lot as it greatly reduced the cost of using 
             paraffin. I also was given a chicken coop. A few months later Nat came and built a spacious house for me. I am very 
             grateful for all Nat has done for my family.
          </p>
      
          </Container>
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
      
          </Container>
        </Item.Description>
      </Modal.Description>
    </Modal.Content>
  </Modal>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src= {require('./common/assets/img/wellofhope.png')} 
        />
        <Item.Header as='a' >NAME:  
        <br/>
        <Label color='green'>MONICAH NYAMBURA KAMAU</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>PLOT NO:  
          <br/> 
          <Label icon='home' content='C-009'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>RESIDENCE: 
           <br/>
            <Label>SETTLEMENT C(SHOLINKE)</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><span>VILLAGE: <Label color='violet'>SHOLINKE</Label></span></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      
      <Modal.Description>
        <Header><Label color='green'>MONICAH NYAMBURA KAMAU</Label></Header>
        <Item.Description>
          <Container>
          <Grid celled>
    <Grid.Row>
     
      <Grid.Column width={13}>
      <Item.Extra>
      <div className='ui two buttons'>
            <span className='cinema'> <Label> LOCATION:  </Label><Label as='a' color='yellow'>SHOLINKE AREA</Label>
            </span>
            
        </div>
            </Item.Extra>
            <br/>
            <Item.Extra>
            <span className='cinema'>AGE:     <Label>52 YEARS OLD</Label></span>
        </Item.Extra>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
      <span className='cinema'>DONORS: 
           <br/>
            </span>
        <Image src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
        <Header><Label color='olive'>FRANK AND DOTTIE</Label></Header>
      </Grid.Column>
      <Grid.Column width={10}>
      <Container>
            
      <p textAlign='center'>
             I moved in with my sister who lived in Kiserian after moving back to Nairobi as my charcoal selling
             business couldnt support my family. One day at work I met someone talking about WELL OF HOPE, a 
             christian organisation that assists widows. I asked her to direct me to Zipporah and I joined her
             fellowship meetings.
          </p>

          <p textAlign='center'>
             I urged Nat to build me a house but i wanted to move in as quickly as possible. After construction I stayed in 
             Sholinke alone for two weeks. Nat later told me to use the 3000 kshs that i had raised from the church to do 
             whatever I want as a couple by the name of Frank and Dottie had donated money to construct a home for me.
             My life has completely changed thanks to Nat and Zipporah.
          </p>
      
          </Container>
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
      
          </Container>
        </Item.Description>
      </Modal.Description>
    </Modal.Content>
  </Modal>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src= {require('./common/assets/img/wellofhope.png')} 
        />
        <Item.Header as='a' >NAME:  
        <br/>
        <Label color='green'>RAHAB WANJIKU</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>PLOT NO:  
          <br/> 
          <Label icon='home' content='N/A'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>RESIDENCE: 
           <br/>
            <Label>SETTLEMENT C(SHOLINKE)</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><span>VILLAGE: <Label color='violet'>SHOLINKE</Label></span></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      
      <Modal.Description>
        <Header><Label color='green'>RAHAB WANJIKU</Label></Header>
        <Item.Description>
          <Container>
          <Grid celled>
    <Grid.Row>
     
      <Grid.Column width={13}>
      <Item.Extra>
      <div className='ui two buttons'>
            <span className='cinema'> <Label> LOCATION:  </Label><Label as='a' color='yellow'>SHOLINKE</Label>
            </span>
            
        </div>
            </Item.Extra>
            <br/>
            <Item.Extra>
            <span className='cinema'>AGE:     <Label>N/A</Label></span>
        </Item.Extra>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
      <span className='cinema'>DONORS: 
           <br/>
            </span>
        <Image src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
        <Header><Label color='olive'>GRegg and Valerie</Label></Header>
      </Grid.Column>
      <Grid.Column width={10}>
      <Container>
            
      <p textAlign='center'>
             After the death of my husband I moved in with my aunt before Idecided to rent my own place. Life 
             was a daily struggle as paying my rent was a hurdle and paying for their school fess was also a 
             struggle. At the market I heard about THE WELL OF HOPE. I requested for the details and the direction.
             Early the following morning I went to Nat's office. I introduced myself and after I finished he asked 
             me a coule of questions. I started attending the monthly meetings as they were my source of strength 
             from the testimonies I heard.
          </p>

          <p textAlign='center'>
             Nat built me a house and also fenced my compound. I have received a solar lantern now I dont have to use a 
             wick anymore. I also got a chicken coop where I rear chicken for sale.
             May God bless Nat and Zipporah for really being a blessing in my life. I pray that the Lord's favour will be
             with you all the days of your lives.
          </p>
      
          </Container>
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
      
          </Container>
        </Item.Description>
      </Modal.Description>
    </Modal.Content>
  </Modal>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src= {require('./common/assets/img/wellofhope.png')} 
        />
        <Item.Header as='a' >NAME:  
        <br/>
        <Label color='green'>LEAH WAMBUI</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>PLOT NO:  
          <br/> 
          <Label icon='home' content='B-001'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>RESIDENCE: 
           <br/>
            <Label>SETTLEMENT C (SHOLINKE)</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><span>VILLAGE: <Label color='violet'>DIVELEY VILLAGE</Label></span></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      
      <Modal.Description>
        <Header><Label color='green'>LEAH WAMBUI</Label></Header>
        <Item.Description>
          <Container>
          <Grid celled>
    <Grid.Row>
     
      <Grid.Column width={13}>
      <Item.Extra>
      <div className='ui two buttons'>
            <span className='cinema'> <Label> LOCATION:  </Label><Label as='a' color='yellow'>SHOLINKE</Label>
            </span>
            
        </div>
            </Item.Extra>
            <br/>
            <Item.Extra>
            <span className='cinema'>AGE:     <Label>26 YEARS OLD</Label></span>
        </Item.Extra>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
      <span className='cinema'>DONORS: 
           <br/>
            </span>
        <Image src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
        <Header><Label color='olive'>Wendy and Dale Lam</Label></Header>
      </Grid.Column>
      <Grid.Column width={10}>
      <Container>
            
            <p textAlign='center'>
             I was lucky to be chosen to benefit with a plot in sholinke. When we moved to this place, life was very
             difficult because we were still very new in the area. However, we have settled down; life has become easier
             . I am happy that I dont have to pay rent; my focus can now be on meeting my family's needs. After a few 
             months in Sholinke, my husband fell ill and Nat helped us with the medical bills.
          </p>

          <p textAlign='center'>
            My heart thanks God everyday for helping us find the WELL OF HOPE in times of need. I also thank Dale and Lam for giving
            our friend Lynn money to come and build a house for me. I pray that the Lord would continuously keep you both 
            in perfect health. 
          </p>
      
          </Container>
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
      
          </Container>
        </Item.Description>
      </Modal.Description>
    </Modal.Content>
  </Modal>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src= {require('./common/assets/img/wellofhope.png')} 
        />
        <Item.Header as='a' >NAME:  
        <br/>
        <Label color='green'>JANET SAYO AGINETTA</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>PLOT NO:  
          <br/> 
          <Label icon='home' content='006'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>RESIDENCE: 
           <br/>
            <Label>N/A</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><span>VILLAGE: <Label color='violet'>N/A</Label></span></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      
      <Modal.Description>
        <Header><Label color='green'>JANET SAYO AGINETTA</Label></Header>
        <Item.Description>
          <Container>
          <Grid celled>
    <Grid.Row>
     
      <Grid.Column width={13}>
      <Item.Extra>
      <div className='ui two buttons'>
            <span className='cinema'> <Label> LOCATION:  </Label><Label as='a' color='yellow'>N/A</Label>
            </span>
            
        </div>
            </Item.Extra>
            <br/>
            <Item.Extra>
            <span className='cinema'>AGE:     <Label>N/A</Label></span>
        </Item.Extra>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
      <span className='cinema'>DONORS: 
           <br/>
            </span>
        <Image src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
        <Header><Label color='olive'>JIM AND SUSAN TOTTY</Label></Header>
      </Grid.Column>
      <Grid.Column width={10}>
      <Container>
            
            <p textAlign='center'>
             A close friend of mine told me of a gathering where widows met every month for prayer meeting. During the next
             scheduled meeting I decided to attend where I was greatly encouraged by the testimonies of other women  within
             the group. Ifinally had found a place where I was accepted and appreciated not ofr what I could offer but for 
             whom I was.
          </p>

          <p textAlign='center'>
             I have grown tremendously as the meetings have progressed despite the challenges I face. I want to thank Nat,
             Zipporah and all the sponsors for the gifts like a house, toilet, beds, water tanks, chicken coop and solar lamps.
             May God increase you for being so kind to my family.
          </p>
      
          </Container>
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
      
          </Container>
        </Item.Description>
      </Modal.Description>
    </Modal.Content>
  </Modal>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src= {require('./common/assets/img/wellofhope.png')} 
        />
        <Item.Header as='a' >NAME:  
        <br/>
        <Label color='green'>JOYCE NDUTA MUCIGI</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>PLOT NO:  
          <br/> 
          <Label icon='home' content='009'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>RESIDENCE: 
           <br/>
            <Label>N/A</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><span>VILLAGE: <Label color='violet'>N/A</Label></span></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      
      <Modal.Description>
        <Header><Label color='green'>JOYCE NDUTA MUCIGI</Label></Header>
        <Item.Description>
          <Container>
          <Grid celled>
    <Grid.Row>
     
      <Grid.Column width={13}>
      <Item.Extra>
      <div className='ui two buttons'>
            <span className='cinema'> <Label> LOCATION:  </Label><Label as='a' color='yellow'>N/A</Label>
            </span>
            
        </div>
            </Item.Extra>
            <br/>
            <Item.Extra>
            <span className='cinema'>AGE:     <Label>57 YEARS OLD</Label></span>
        </Item.Extra>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
      <span className='cinema'>DONORS: 
           <br/>
            </span>
        <Image src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
        <Header><Label color='olive'>Jan Ballinger</Label></Header>
      </Grid.Column>
      <Grid.Column width={10}>
      <Container>
            
            <p textAlign='center'>
             When Nat and his wife visited me and saw how bad my living conditions were they decided to build for me 
             a house. I am still in awe as to how big and beautiful my house is as compared to the one I lived in before 
             . I am not stressed any more that someone will come banging my door demanding for rent. I have land to plant
             a few crops like maize and beans that would supplement my income especially now that we in the planting season.
          </p>

          <p textAlign='center'>
             I was given a chicken coop where I can rear chicken; I have a toilet, solar lantern so as to have light at night.
             May God bless the people that gave money for my support , may they live in abundance for the support they have shown 
             my family.
          </p>
      
          </Container>
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
      
          </Container>
        </Item.Description>
      </Modal.Description>
    </Modal.Content>
  </Modal>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src= {require('./common/assets/img/wellofhope.png')} 
        />
        <Item.Header as='a' >NAME:  
        <br/>
        <Label color='green'>MARGARET WANJA</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>PLOT NO:  
          <br/> 
          <Label icon='home' content='N/A'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>RESIDENCE: 
           <br/>
            <Label>N/A</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><span>VILLAGE: <Label color='violet'>N/A</Label></span></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      
      <Modal.Description>
        <Header><Label color='green'>MARGARET WANJA</Label></Header>
        <Item.Description>
          <Container>
          <Grid celled>
    <Grid.Row>
     
      <Grid.Column width={13}>
      <Item.Extra>
      <div className='ui two buttons'>
            <span className='cinema'> <Label> LOCATION:  </Label><Label as='a' color='yellow'>N/A</Label>
            </span>
            
        </div>
            </Item.Extra>
            <br/>
            <Item.Extra>
            <span className='cinema'>AGE:     <Label>45 YEARS OLD</Label></span>
        </Item.Extra>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
      <span className='cinema'>DONORS: 
           <br/>
            </span>
        <Image src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
        <Header><Label color='olive'>Lynn</Label></Header>
      </Grid.Column>
      <Grid.Column width={10}>
      <Container>
            
            <p textAlign='center'>
             I met Zipporahand Nat from church where we both fellowship, so when they began WELL OF HOPE I used to 
             attend their meetings. Zipporah talked to us a lot and encouraged us not to give up hope. We would 
             share our challenges and successes with one another. This encouraged me so much knowing that I was not alone.
             After 30 years of paying rent; I am very happy that I finally have a beautiful home.
          </p>

          <p textAlign='center'>
             WELL OF HOPE has made a lasting impact to the lives of my family. Through them I have a beautiful and spacious house
             . I have room to rear chicken, I can also do farming. My God truly bless you all for your kind heart.
          </p>
      
          </Container>
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
      
          </Container>
        </Item.Description>
      </Modal.Description>
    </Modal.Content>
  </Modal>
      </Card.Content>
    </Card>

    
    </CardGroup>
            </React.Fragment>
         );
    }
}
 
export default Stories;