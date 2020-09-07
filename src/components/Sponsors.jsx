import React, { Component } from "react";
import {
  Icon,
  Card,
  Button,
  Header,
  Container,
  Modal,
  Image,
  Item,
  Label,
  Divider,
  CardGroup,
} from "semantic-ui-react";
import "./common/wellofhope.png";
import Footer from "./common/Footer";

const paragraph = (
  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
);

const Sponsors = () => (
  <React.Fragment>
    <div>
      <Header as="h1" icon textAlign="center">
        {/* <Icon name='users' circular /> */}
        <Header.Content>MISSIONARY STORIES</Header.Content>
      </Header>
    </div>

    {/* <Header as='h3' block color='blue'>
  <Label color='pink'>Girls</Label>
  </Header> */}

    <Card.Group>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={require("./common/assets/img/wellofhope.png")}
          />
          <Item.Header as="a">
            NAME:
            <br />
            <Label color="pink">VALERIE LOCKLEAR</Label>
          </Item.Header>
          <br />
          <Item.Meta>
            <span className="cinema">
              TEAM:
              <br />
              <Label icon="student" content="2016" />
            </span>
          </Item.Meta>
          <Card.Description>
            <Item.Extra>
              <span className="cinema">
                STATUS:
                <br />
                <Label>Missionary</Label>
              </span>
            </Item.Extra>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Modal trigger={<Button>Testimonial</Button>}>
            <Modal.Header>
              <Label color="pink">VALERIE LOCKLEAR</Label>
            </Modal.Header>
            <Modal.Content image>
              <Image
                wrapped
                size="medium"
                src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
              />
              <Modal.Description>
                <Header>
                  <Label color="pink">VALERIE LOCKLEAR</Label>
                </Header>
                <Item.Description>
                  <Container>
                    <p>
                      My heart will forever be changed by my trip to Kenya!  The
                      people of Kenya have very little as far as material goods,
                      but they surely love the Lord and are not afraid to shout
                      it out!   They poured out their love for us which is truly
                      what God wants all of us to do... love each other.
                    </p>
                    <p>
                      I appreciate now more than ever the gifts that God has
                      provided to me. I want to share those gifts with others.
                    </p>
                    <p>Love and Blessings to all,</p>
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
            floated="right"
            size="mini"
            src={require("./common/assets/img/wellofhope.png")}
          />
          <Item.Header as="a">
            NAME:
            <br />
            <Label color="pink">CINDY MIMS</Label>
          </Item.Header>
          <br />
          <Item.Meta>
            <span className="cinema">
              TEAM:
              <br />
              <Label icon="student" content="2016" />
            </span>
          </Item.Meta>
          <Card.Description>
            <Item.Extra>
              <span className="cinema">
                STATUS:
                <br />
                <Label>Student</Label>
              </span>
            </Item.Extra>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Modal trigger={<Button>Testimonial</Button>}>
            <Modal.Header>
              <Label color="pink">CINDY MIMS</Label>
            </Modal.Header>
            <Modal.Content image>
              <Image
                wrapped
                size="medium"
                src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
              />
              <Modal.Description>
                <Header>
                  <Label color="pink">CINDY MIMS</Label>
                </Header>
                <Item.Description>
                  <Container>
                    <p>
                      This was my second trip to Kenya; I was on the first team
                      in 2011 and my perspective was different the second time
                      around. On the first trip I was completely overwhelmed
                      with the poverty, the women and children that were
                      destitute and the chaos on the streets. On this 2018 trip
                      I saw how God had expanded resources for housing, living
                      room furniture and beds, and the biggest improvement, the
                      wells that were donated and the water on each property. I
                      was so encouraged because so many people were now helping
                      out the widows and we were not just limited by the money
                      from the sale of shoes. God is moving and moving fast! He
                      has strengthened Nat and Zippy with confidence, boldness
                      and an unstoppable attitude. They are fast learners and
                      strong doers, they understand what they are called to do
                      and they walk faithfully forward despite obstacles that
                      get in the way. Because of their faithfulness, many are
                      blessed... ...women who were hopeless have hope, children
                      have school and communities to grow up in and the women
                      feel heard in their despair.
                    </p>
                    <p>
                      On the 2018 trip, I concentrated on what the widows were
                      saying, trying to understand their journey and the home
                      they so desperately wanted to receive from Well of Hope.
                      We visited one young lady who was taking care of her
                      children, and her mother. Nat ask her why she wanted to
                      live on a tract of land from Well of Hope. She said I just
                      need a chance, I need a leg up, I need to start over and
                      save my mother from the depressing pit she is falling
                      into." As I listened to her talk to Nat, who had tears
                      streaming down his cheeks while listening to her
                      desperation, I was reminded in my spirit that God is a God
                      of second chances, he is a God of mercy, and he is a God
                      of love. This woman would receive her second chance. Her
                      gratitude was like the blind man who Jesus healed at
                      Bethsaida. Well of Hope is a mission of God, to spread
                      love to widows who no longer have hope and who need a
                      second chance. I might not be able to feed all of Kiserian
                      with maize but I can process shoes so those who are
                      working in the trenches can bring hope to the hopeless.
                    </p>
                    <p>
                      On the 2018 trip, I concentrated on what the widows were
                      saying, trying to understand their journey and the home
                      they so desperately wanted to receive from Well of Hope.
                      We visited one young lady who was taking care of her
                      children, and her mother. Nat ask her why she wanted to
                      live on a tract of land from Well of Hope. She said I just
                      need a chance, I need a leg up, I need to start over and
                      save my mother from the depressing pit she is falling
                      into." As I listened to her talk to Nat, who had tears
                      streaming down his cheeks while listening to her
                      desperation, I was reminded in my spirit that God is a God
                      of second chances, he is a God of mercy, and he is a God
                      of love. This woman would receive her second chance. Her
                      gratitude was like the blind man who Jesus healed at
                      Bethsaida. Well of Hope is a mission of God, to spread
                      love to widows who no longer have hope and who need a
                      second chance. I might not be able to feed all of Kiserian
                      with maize but I can process shoes so those who are
                      working in the trenches can bring hope to the hopeless.
                    </p>
                  </Container>

                  <br />
                  {/* <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Frank and Dottie Bely</Label></Item.Header> */}
                </Item.Description>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={require("./common/assets/img/wellofhope.png")}
          />
          <Item.Header as="a">
            NAME:
            <br />
            <Label color="pink">DOTTIE BELY</Label>
          </Item.Header>
          <br />
          <Item.Meta>
            <span className="cinema">
              TEAM:
              <br />
              <Label icon="student" content="2008" />
            </span>
          </Item.Meta>
          <Card.Description>
            <Item.Extra>
              <span className="cinema">
                STATUS:
                <br />
                <Label>Geospatial Engineer</Label>
              </span>
            </Item.Extra>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Modal trigger={<Button>Testimonial</Button>}>
            <Modal.Header>
              <Label color="pink">DOTTIE BELY</Label>
            </Modal.Header>
            <Modal.Content image>
              <Image
                wrapped
                size="large"
                src={require("./common/assets/img/wellofhope.png")}
              />
              <Modal.Description>
                <Header>
                  <Label color="pink">DOTTIE BELY</Label>
                </Header>
                <Item.Description>
                  <Container>
                    <p>
                      As an English teacher, I have taken many classes in
                      writing and in literature. I believe that all learning is
                      a gift from God. Through my studies, God has given me
                      skills that I feel need to be used for His glory. I have
                      been privileged to act as an editor for the Well of Hope
                      International. Well of Hope International has been doing
                      God’s work in helping widows and children. These stories
                      represent lives that have been touched by the leaders of
                      this organization, Nat and Zipporah. The two of them have
                      been gracious to me, asking me to act as editor of the
                      writing. I enjoy each story and seek to make them ready
                      for publishing while still maintaining the character of
                      each story. I thank God for the chance to review these
                      stories.
                    </p>
                  </Container>

                  <br />
                  {/* <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Carla and Doug</Label></Item.Header> */}
                </Item.Description>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={require("./common/assets/img/wellofhope.png")}
          />
          <Item.Header as="a">
            NAME:
            <br />
            <Label color="pink">CINDY BRADFIELD</Label>
          </Item.Header>
          <br />
          <Item.Meta>
            <span className="cinema">
              CLASS OF:
              <br />
              <Label icon="student" content="2008" />
            </span>
          </Item.Meta>
          <Card.Description>
            <Item.Extra>
              <span className="cinema">
                STATUS:
                <br />
                <Label>Alumnus</Label>
              </span>
            </Item.Extra>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Modal trigger={<Button>Testimonial</Button>}>
            <Modal.Header>
              <Label color="pink">CINDY BRADFIELD</Label>
            </Modal.Header>
            <Modal.Content image>
              <Image
                wrapped
                size="large"
                src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
              />
              <Modal.Description>
                <Header>
                  <Label color="pink">CINDY BRADFIELD</Label>
                </Header>
                <Item.Description>
                  <Container>
                    <p>
                      I think what touched me most is the women’s faith in God
                      is unwavering. Even though some of them are at their
                      lowest point in life, their faith remains so strong. They
                      keep on persevering. It makes me realize how fortunate I
                      am, not to be undergoing some of the challenges that they
                      face. Being able to touch and change a family’s life by
                      giving them a house is indescribable. I am thankful that I
                      was able to help the family with this need. I can’t wait
                      to see what changes may be made to the house by the next
                      time I visit. This picture was on one of the widow’s doors
                      who got a new home. When we visited, we saw this message
                      on the door.
                    </p>
                  </Container>

                  <br />
                  {/* <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Elsie Flory</Label></Item.Header> */}
                </Item.Description>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={require("./common/assets/img/wellofhope.png")}
          />
          <Item.Header as="a">
            NAME:
            <br />
            <Label color="pink">NANCY BRADFIELD</Label>
          </Item.Header>
          <br />
          <Item.Meta>
            <span className="cinema">
              CLASS OF:
              <br />
              <Label icon="student" content="2017" />
            </span>
          </Item.Meta>
          <Card.Description>
            <Item.Extra>
              <span className="cinema">
                STATUS:
                <br />
                <Label>Alumnus</Label>
              </span>
            </Item.Extra>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Modal trigger={<Button>Testimonial</Button>}>
            <Modal.Header>
              <Label color="pink">NANCY BRADFIELD</Label>
            </Modal.Header>
            <Modal.Content image>
              <Image
                wrapped
                size="large"
                src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
              />
              <Modal.Description>
                <Header>
                  <Label color="pink">NANCY BRADFIELD</Label>
                </Header>
                <Item.Description>
                  <Container>
                    <p>
                      I was excited to see how the village of houses had grown
                      since I was there in 2013. It is gratifying to see how the
                      widows have taken care of their houses—planting food to
                      eat and sell, making the inside look like a home, raising
                      chickens for eggs or to sell. They are so joyful and
                      grateful to have been given a helping hand and they make
                      the most of it. I am amazed at their faith even before
                      they are given a house. Being able to help the children to
                      attend school, have a safe place to live, and food to eat
                      is a blessing. This trip, like the first one, was a chance
                      to reflect on how to use what we have been given.
                    </p>
                    <p>
                      God has his hands on Nat and Zipporah and this mission!
                    </p>
                  </Container>

                  <br />
                  {/* <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Pat Helmuth</Label></Item.Header> */}
                </Item.Description>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={require("./common/assets/img/wellofhope.png")}
          />
          <Item.Header as="a">
            NAME:
            <br />
            <Label color="pink">SANDRA RUSH</Label>
          </Item.Header>
          <br />
          <Item.Meta>
            <span className="cinema">
              TEAM:
              <br />
              <Label icon="student" content="VIRGINIA" />
            </span>
          </Item.Meta>
          <Card.Description>
            <Item.Extra>
              <span className="cinema">
                STATUS:
                <br />
                <Label>Student</Label>
              </span>
            </Item.Extra>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Modal trigger={<Button>Testimonial</Button>}>
            <Modal.Header>
              <Label color="pink">SANDRA RUSH</Label>
            </Modal.Header>
            <Modal.Content image>
              <Image
                wrapped
                size="large"
                src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
              />
              <Modal.Description>
                <Header>
                  <Label color="pink">SANDRA RUSH</Label>
                </Header>
                <Item.Description>
                  <Container>
                    <p>
                      How do you put into words an experience that is life
                      changing? I will forevermore remember meeting the widows
                      for the first time when they were told they would be
                      receiving a house. There were expressions of joy and
                      thanks, the songs of praise to father God, and the smiles
                      when we visited those who have made their houses a home
                      with their own decor and gardens.
                    </p>
                    <p>
                      Well of Hope gives new life to those who have been
                      forgotten. I will support this mission with my words,
                      financial gifts, and prayer for the widows and those who
                      have made the mission a reality.
                    </p>
                  </Container>

                  <br />
                  {/* <Item.Header as='a' >
          <Card.Description> SPONSORS:  </Card.Description>
       
        <Label color='olive'>Rodney and Mary Peters</Label></Item.Header> */}
                </Item.Description>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Card.Content>
      </Card>
    </Card.Group>
  </React.Fragment>
);

export default Sponsors;
