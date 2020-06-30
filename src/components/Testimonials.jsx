import React, { Component } from 'react';
import {Icon, Card, Button, Header, Container, Modal, Image, Item, Label, Divider, CardGroup } from 'semantic-ui-react'
import  "./common/wellofhope.png"
import Footer from './common/Footer'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />


const Testimonials = () => (
  <React.Fragment>
   
   <div>
    <Header as='h1' icon textAlign='center'>
      {/* <Icon name='users' circular /> */}
      <Header.Content>STUDENT TESTIMONIALS</Header.Content>
    </Header>
    
  </div>

  <Header as='h3' block color='blue'>
  <Label color='pink'>Girls</Label>
  </Header>

<Card.Group >
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src= {require('./common/assets/img/wellofhope.png')} 
        />
        <Item.Header as='a' >NAME:  
        <br/>
        <Label color='pink'>SILVIA NAIPANDE</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='2016'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Student</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='pink'>SILVIA NAIPANDE</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header><Label color='pink'>SILVIA NAIPANDE</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
          A twin sister to Victoria Naini, Silvia has
          enjoyed the benefits of love and support from
          Frank and Dottie Bely since her first days in school. Being
          focused and committed to her studies enabled her to be the first
          candidate in her school - Mlimani Primary School, where she took her 
          KCPE exams in 2016. Her high scores earned her 'Wings To Fly Programme'
          where she receives a full secondary scholarship in high school.
          She is already shining in her new school, ready to face the future with hope. 
          </p>
      
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
        <Label color='pink'>VICTORIA NAINI</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='2016'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Student</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='pink'>VICTORIA NAINI</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header><Label color='pink'>VICTORIA NAINI</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
           Victoria, a widow's child who scored the second best marks
           in Mlimani Primary School after her twin sister, Silvia 
           Naipande in 2016 on the KCPE exam is now in high school where
           she is already taking a leading position. Like her sister,
           Victoria has enjoyed the benefit of child sponsorship through her loving sponsors,
           Frank and Dottie Bely, who have sponsored her since her first day in school up to now
           when she has joined high school. Education has made a difference in her situation. The 
           future looks bright.
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Frank and Dottie Bely</Label></Item.Header>
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
        <Label color='pink'>CATHERINE AKINYI</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='2008'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Geospatial Engineer</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='pink'>CATHERINE AKINYI</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header><Label color='pink'>CATHERINE AKINYI</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
            Catherine was among the first girls to get sponsorship through <Label color='blue'>THE WELL OF HOPE</Label>. 
            From primary school to high school, she has been an "A" student and now is a student at University of Nairobi, the most 
            prestigious university in Kenya, pursuing a Bachelor's degree in Geospatial Engineering and Space Technology. Catherine
            has always represented her school well . She went through a regional and national mathematics contest and became the winner
            . A child of a widow who has a warm heart, Catherine enjoyed the benefits of sponsorship that enabled her to pursue her 
            dream.
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Carla and Doug</Label></Item.Header>
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
        <Label color='pink'>MARY WAIRIMU</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='2008'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Alumnus</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='pink'>MARY WAIRIMU</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header><Label color='pink'>MARY WAIRIMU</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
            John and Elsie Flory must be so proud of the child they helped get an education. Mary
            is a student whom they sponsored from class one to university. She is about to graduate with 
            Bahcelor's degree in exercise and Sport Science. Aconfident girl, Mary has come  a long way to
             be where she is today.
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Elsie Flory</Label></Item.Header>
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
        <Label color='pink'>EVELYNE WAJUGO</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='2017'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Alumnus</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='pink'>EVELYNE WAJUGO</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header><Label color='pink'>EVELYNE WAJUGO</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
           A pastor's daughter whose father died when she needed love and care most was able to receive love and support 
           from her sponsor through <Label color='blue'>THE WELL OF HOPE</Label>. This girl is about to graduate from High
           school. Her family was blessed with land through the <Label color='brown'>WELL OF HOPE SETTLEMENT project</Label>. 
           The Lord has been so faithful to Evelyn's family.
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Pat Helmuth</Label></Item.Header>
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
        <Label color='pink'>JOY NJERI</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='N/A'/>
          </span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Student</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='pink'>JOY NJERI</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header><Label color='pink'>JOY NJERI</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
            So small and sweet, Joy says she wants to be a teacher when she graduates because she loves
            her class teacher, Rosemary, who is smart and always wants to help everyone. Her mother is very
            hard working, despite difficulties in life. Thanks for the support and love from Rodney and Mary 
            Peters.
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Rodney and Mary Peters</Label></Item.Header>
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
        <Label color='pink'>DIANA IKEGU</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='2009'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Alumnus</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='pink'>DIANA IKEGU</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header><Label color='pink'>DIANA IKEGU</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
           A girl with the sweetest smile and a very humble spirit, Diana is a person whom everyone would want to befriend.
           She graduated from High school, didnt go to college. However she always wanted to get into business where she 
           is now doing well. She says her acumen for business skills were learned by seeing Nat struggle with her burasries.
           She is a beneficiary of <Label color='blue'>THE WELL OF HOPE </Label> and is very grateful to her sponsors,
            Leon and Jewel Sink. 
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Leon and Jewel Sink</Label></Item.Header>
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
        <Label color='pink'>MONICAH WAMBUI</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='2009'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Alumnus</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='pink'>MONICAH WAMBUI</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header><Label color='pink'>MONICAH WAMBUI</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
           Monica is a beautiful girl who lives with her mom and her three siblings. She misses her dad who died 
           with her younger brother in a road accident. A beneficiary of <Label color='blue'>THE WELL OF HOPE </Label>
           since class one to graduation of secondary school, Monica has enjoyed love and support from Nathan and Daisy. She works 
           as a waiter in the hotel industries.
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Nathan and Daisy</Label></Item.Header>
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
        <Label color='pink'>JANE WANJUGU</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='N/A'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Student</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='pink'>JANE WANJUGU</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header><Label color='pink'>JANE WANJUGU</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
             Jane's father  died in 2010. He left his wife with three children. Jane's mother lives with underlying conditions
             , but, being a strong Christian, she is positive and lives one day at a time. Jane has a lot of supportfrom her
             caring family and is focused on doing well. She says her family is so blessed to have all her siblings sponsored 
             by <Label color='blue'>THE WELL OF HOPE </Label> so that they can attend school. She is particularly grateful to
             her sponsors and always talks about how much she appreciates their love and support
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Rick and Sharon Gross</Label></Item.Header>
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
        <Label color='pink'>NATALIA NDUTA</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='N/A'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Student</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='pink'>NATALIA NDUTA</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header><Label color='pink'>NATALIA NDUTA</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
              A grand child of Zipporah Ngatia, a co-founder of <Label color='blue'>THE WELL OF HOPE </Label> with Zipporah Kamau,
              Natalia is a beautiful angel who reminds everyone in the well of hope of her grandmother who went to be with 
              the Lord some years after the organisation was born. Natalia is blessed to have a very supportive mother who,
              despite going through family challenges, is fully there for her children, Natalia and Enock Lemaiyan. Her family
              is very grateful for Natalia's sponsors who have shown her a lot of love and support.
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Jesse, Tonya Filbrun and Family</Label></Item.Header>
        </Item.Description>
      </Modal.Description>
    </Modal.Content>
  </Modal>
      </Card.Content>
    </Card>


  </Card.Group>
  <Header as='h3' block>
      <Label color='teal'>BOYS</Label>
  </Header>
<Card.Group>

<Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src= {require('./common/assets/img/wellofhope.png')} 
        />
        <Item.Header as='a' >NAME:  
        <br/>
        <Label color='teal'>LAMECH OGINA</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='2016'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Student</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='teal'>LAMECH OGINA</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
      <Modal.Description>
        <Header><Label color='teal'>LAMECH OGINA</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
         Yet to be sent
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>???????</Label></Item.Header>
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
        <Label color='teal'>EDWIN GICHINGA</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='2012'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Alumnus</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='teal'>EDWIN GICHINGA</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
      <Modal.Description>
        <Header><Label color='teal'>EDWIN GICHINGA</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
          A tall handsome son of a preacher whose father died abruptly
          from chest pain, Edwin is the first born of his family and 
          together with his other sibliings are beneficiaries of the well of hope.
          Edwin has been blessed to receive his Education smoothly through sponsorship
          from primary to high school and now plans to attend college.
          His family lives in their own home under <Label color='brown'>THE WELL OF HOPE SETTLEMENT PROJECT</Label>.
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>David & Kristy Graybill</Label></Item.Header>
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
        <Label color='teal'>GIDEON GUCHU</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='2011'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Alumnus</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='teal'>GIDEON GUCHU</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
      <Modal.Description>
        <Header><Label color='teal'>GIDEON GUCHU</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
         A child of a widow who never grew to know his dad who died when he was a baby, 
         Gideon was among the first children to get sponsorship through <Label color='blue'>THE WELL OF HOPE</Label>.
         He grew with the love and support of RACHEL LANDIS who has been his sponsor all along.
         Having gone through primary and high school, Gideon is independent now with his own cyber cafe business 
         and is able to help his mom with bills. He loves reading and participating in church actvities.
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Rachel Landis</Label></Item.Header>
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
        <Label color='teal'>SAMUEL NGIGE</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='2011'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Alumnus</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='teal'>SAMUEL NGIGE</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
      <Modal.Description>
        <Header><Label color='teal'>SAMUEL NGIGE</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
           A young man who has gone through many things, losing both parents, one while in primary 
           and other while in secondary school, has now finished high school and gone to do what he loves most,
           Mechanics. He has appreciated the support and love he received from <Label color='blue'>
             THE WELL OF HOPE
           </Label> and his sponsors, Rodney and Mary Peters
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Rodney and Mary Peters</Label></Item.Header>
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
        <Label color='teal'>ENOCK LEMAIYAN</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='N/A'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Student</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='teal'>ENOCK LEMAIYAN</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
      <Modal.Description>
        <Header><Label color='teal'>ENOCK LEMAIYAN</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
          Enock is so proud to be sponsored by <Label color='blue'>THE WELL OF HOPE</Label>.
          "I am a grandchild of Zipporah Ngatia who worked with Zipporah Kamau to start
           <Label color='blue'>THE WELL OF HOPE ORGANISATION</Label>. My grandmother was very sick when
           they started the organisation; when she died the directors told my mum that the organisation
           will sponsor my education as a result of the good work that my granny did for the widows. I am the school
           captain and the scout's leader; I also enjoy being loved by other students here. I wouold like to be an engineer
           when i graduate from school. I am grateful for the love and support I get from my sponsors who have walked with me all 
           through my primary school life. I would like to perform well and make them proud."
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Charles and Sue Wray</Label></Item.Header>
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
        <Label color='teal'>DALTON ONGECHE OGINA</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='2010'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Software Engineer</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='teal'>DALTON ONGECHE OGINA</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
      <Modal.Description>
        <Header><Label color='teal'>DALTON ONGECHE OGINA</Label></Header>
        <Item.Description>
          <Container>
            
           <p>
             Dalton, a young bright boy went through Mlimani Star Junior in Primary School,
             then went on to study high school in western Kenya, and studied software development
             and engineering in University.
             "I think for me <Label color='blue'> THE WELL OF HOPE INTERNATIONAL</Label> acted as a medium for inspiration of who I am today.
             The most significant trait I got from the organisation was to never give up and always go for my heart desires.
             My mum on the other hand taught me to be relentless in my search for success and happiness. With these traits I have worked 
             with I think the largest and life changing companies that I could think of from Cytonn investments where I worked as a
             Financial Consultant and an IT intern, then I went on to be a junior developer in Microsoft 4AFRIKA where I gained most of the skills
             that I use to date. 
             All these were made possible through being a beneficiary of <Label color='blue'> THE WELL OF HOPE INTERNATIONAL</Label>  
             and a constant reminder from my mom that I have to be successful no matter the situation. I am also thankful for the 
             support Dave and Lynn Diveley have given me through out the years and to always stick to my beliefs. I remember that 
             they sent me a bible and wrote on it that it would change my life funny enough every time I read it something extra-ordinary happens."
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Dave and Lynn Diveley</Label></Item.Header>
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
        <Label color='teal'>JOHN NDUNG'U</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='2008'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>IT technician</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='teal'>JOHN NDUNG'U</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
      <Modal.Description>
        <Header><Label color='teal'>JOHN NDUNG'U</Label></Header>
        <Item.Description>
          <Container>
            
           <p>
             "My name is John Ndung'u. I was born on 14th April 1994, in a family of three siblings.
              I finished my high school education and joined college where I did IT(Information Technology).
              I am now a happy young man working in a cyber cafe. My life is computers. <Label color='blue'>
              THE WELL OF HOPE INTERNATIONAL</Label> started helping me when i was in class one. I enjoyed
               the support from Kevin and Anita Jamison who were paying for my primary education. Through
               the support of  <Label color='blue'>
              THE WELL OF HOPE INTERNATIONAL</Label>, I managed to finish my secondary education and go on to 
              college. I am a proud alumnus of Mlimani Star Junior where most children of the widows had their early 
              education."
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Kevin And Anita Jamison</Label></Item.Header>
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
        <Label color='teal'>SAMMY NDUNG'U</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='2009'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Preacher</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='teal'>SAMMY NDUNG'U</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
      <Modal.Description>
        <Header><Label color='teal'>SAMMY NDUNG'U</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
              The joy of having touched so many needy children is evident in the life of Nat and Zippy,
              but nothing can describe the joy the couple has for having sponsored Sammy Ndung'u who is 
              now a preacher of the Gospel of Jesus Christ. The journey goes back to when Sammy and his brother,
              Kennedy, lost their mother who was single and so they became orphans. Having grown up in the same area
              that Zippy grew up, the story of Sammy and his brother touched her in a special way and hence the journey
              began!. Today,Sammy is a pastor in one of the fastest growing church in Kiserian where he is proclaiming
              the word Of God. Sammy is one of the success stories that
              <Label color='blue'>THE WELL OF HOPE INTERNATIONAL</Label> is pleased to be able to share.
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Nat and Zippy</Label></Item.Header>
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
        <Label color='teal'>KENNEDY NGINYO</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='2010'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Alumnus</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='teal'>KENNEDY NGINYO</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
      <Modal.Description>
        <Header><Label color='teal'>KENNEDY NGINYO</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
              Kennedy is a bother to Sammy Ndung'u. He was among the first children to be sponsored
              by Nat and Zippy. Today he has overcome all odds to be a pride to his family, especially
              for his grandmother who took care of him and his brother when their mother passed on. Kennedy lives abroad 
              where he is working and making a handsome living to the Glory of GOD.
              {/* <Label color='blue'>THE WELL OF HOPE INTERNATIONAL</Label> is pleased to be able to share. */}
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Nat and Zippy</Label></Item.Header>
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
        <Label color='teal'>PETER MUGO</Label></Item.Header>
        <br/>
        <Item.Meta>
          <span className='cinema'>CLASS OF:  
          <br/> 
          <Label icon='student' content='2010'/></span>
        </Item.Meta>
        <Card.Description>
        <Item.Extra>
            <span className='cinema'>STATUS: 
           <br/>
            <Label>Alumnus</Label></span>
        </Item.Extra>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Modal trigger={<Button>Testimonial</Button>}>
    <Modal.Header><Label color='teal'>PETER MUGO</Label></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
      <Modal.Description>
        <Header><Label color='teal'>PETER MUGO</Label></Header>
        <Item.Description>
          <Container>
            
            <p>
             Peter's Father died a few months before he was born. His mother was among the first Group
             that joined <Label color='blue'>THE WELL OF HOPE INTERNATIONAL</Label> when Zippy first
             introduced the organisation to the widows. In 2005, Roland and Jenny Filbrun began to
             sponsor his education while he was in nursery school. This support continued till 2011.
             At that time the couple got involved in a car accident where Roland suffered injuries that
             made him unable to continue working. The two of them were no longer able to continue with the
             support. However, their dream didnt die as the support was continued by their friends, Mark and B.J Angel. The 
             young man has now completee high school and is pursuing a diploma in supply chain management (procurement).
             What a story of success.
          </p>
      
          </Container>

          <br/>
          <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Mark and B.J Angel</Label></Item.Header>
        </Item.Description>
      </Modal.Description>
    </Modal.Content>
  </Modal>
      </Card.Content>
    </Card>

</Card.Group>

</React.Fragment>
)

export default Testimonials