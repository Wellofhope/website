import React, { Component } from "react";
import {
  Grid,
  Image,
  Container,
  Modal,
  Card,
  Button,
  Header,
  Item,
  Label,
  Message,
  Divider,
} from "semantic-ui-react";
import Gallery from "react-grid-gallery";

const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: "Why Do I build Homes For Widows in Kenya?",
  },
];

const FLORYS = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: "Why Do I build Homes For Widows in Kenya?",
  },
];

const BENEDICT = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: "Why Do I build Homes For Widows in Kenya?",
  },
];

class Causes extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <Header as="h1" icon textAlign="center">
            {/* <Icon name='users' circular /> */}
            <Header.Content>
              {" "}
              <Header as="h1" color="red">
                {" "}
                OUR MISSIONARY STORIES{" "}
              </Header>
            </Header.Content>
          </Header>
          <Divider />
        </div>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Container>
                <Grid.Column>
                  <Gallery images={BENEDICT} />
                  <br />
                  <br />
                  <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                      Why Do I build Homes For Widows in Kenya?{" "}
                    </Header>
                  </p>
                </Grid.Column>
                <p>
                  God has led me. You are a woman who has just been married
                  through an arranged marriage, you must now leave your own
                  family and more into the home of your husband's family.
                </p>
              </Container>
              <Modal trigger={<Button>Read More</Button>} centered={false}>
                <Modal.Header>
                  {" "}
                  <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                      Why Do I build Homes For Widows in Kenya?{" "}
                    </Header>
                  </p>
                </Modal.Header>
                <Modal.Content image>
                  <Image
                    wrapped
                    size="medium"
                    src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                  />
                  <Modal.Description>
                    <p textAlign="center">
                      You have not been provided with an education and as far as
                      you know you have no rights. You have children and along
                      the way you get sick. Your husband succumbs to the
                      sickness and his family now fears you. There are no social
                      programs. There are no shelters. You have no education .
                      You scrape together $5 a month for rent in a one room,
                      dirt floor, tin shack. You scrape together a little money
                      for some maize for you and your children. You may have
                      done this for more than 15 years!
                    </p>
                    <p textAlign="center">
                      As I look at these ladies in the eyes I see their utter
                      hopelessness and my heart breaks. Compared to them I have
                      so much and they have absolutely nothing. How can I not be
                      moved to help?
                    </p>
                    <p textAlign="center">
                      It only takes a small plot of land, small home ($1,700), a
                      small garden, a few chickens, a water tank(much of this
                      provided by our discarded shoes which we ship each year).
                      Now when I go to visit I see JOY. I see friendships bloom.
                      I see HOPE. I see lives changed.
                    </p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
              <Header>
                <Label color="violet">LYNN DIVELEY</Label>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Container>
                <Grid.Column>
                  <Gallery images={BENEDICT} />
                  <br />
                  <br />
                  <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                      GOD'S WORK{" "}
                    </Header>
                  </p>
                </Grid.Column>
                <p>
                  {" "}
                  e met Zippporah on one of her first trips to America in 2005
                  invited her to our home for a meal and to tell us her story.
                  Her dream for{" "}
                  <Label basic color="violet" as="h1">
                    WOHA
                  </Label>
                  was in the very beginning stages. We were very touched with
                  her story and asked how we could help
                </p>
              </Container>
              <Modal trigger={<Button>Read More</Button>} centered={false}>
                <Modal.Header>
                  {" "}
                  <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                      GOD'S WORK{" "}
                    </Header>
                  </p>
                </Modal.Header>
                <Modal.Content image>
                  <Image
                    wrapped
                    size="medium"
                    // src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                  />
                  <Modal.Description>
                    <p>
                      <Label basic color="violet" as="h1">
                        W
                      </Label>
                      e met Zippporah on one of her first trips to America in
                      2005 invited her to our home for a meal and to tell us her
                      story. Her dream for{" "}
                      <Label basic color="violet" as="h1">
                        WOHA
                      </Label>
                      was in the very beginning stages. We were very touched
                      with her story and asked how we could help. She explained
                      her husband, Nathaniel, had a school and that orphans and
                      children of widows were needing sponsors, to attend. She
                      had several pictures of children with her who needed
                      sponsors. We, and some of our family, agreed to sponsor
                      children as they heard about the ministry and Zippporah
                      would direct them to go through us. The sponsorship
                      program, more or less 'fell in our laps'. We were glaf to
                      do this but really didnt even realize what we were getting
                      in for. We soon realized this was 'God's work', and He was
                      prompting people to bless the unprivileged children as Nat
                      & Zippporah and we, shared the needs and the blessing it
                      was to these children to have a chance to attend school.
                    </p>
                    <p>
                      Through the years we have had meetings of information
                      about{" "}
                      <Label basic color="violet" as="h1">
                        WOHA
                      </Label>
                      , and making people aware of the opportunity to sponsor
                      children. We have visited Nathaniel's school and met these
                      sponsored children. This is a Christian school with high
                      moral standards. Many of these children excel and have
                      high aspirations because of the chance they are given at
                      chance for a good education. From time to time these
                      children will write letters to their sponsors expressing
                      their appreciation for being sponsored and sharing how
                      they are doing in school and what their goals and dreams
                      are. This is much appreciated by those sponsoring. Some of
                      the sponsors wish this correspondence could be even more
                      frequent. Sponsors are able to send gifts to their
                      children when someone visits America. Thank you letters
                      are most often sent by the children.
                    </p>
                    <p>
                      We have never solicited to have children sponsored. We
                      only make the need known. God is ever faithful! At present
                      we have around 73 children being sponsored and 56
                      sponsors. We are praying the LORD will bring us more
                      willing persons as there are many more children in need of
                      sponsors. Sometimes it's hard not to be disappointed when
                      there are so many children needing sponsors and it seems
                      no one comes forward. We thank Him for each one who does
                      and continue to trust the Father to prompt willing
                      participants. All for His glory, and may each one go where
                      He leads.
                    </p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
              <Header>
                <Label color="violet">Harold And Nancy Flory</Label>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Container>
                <Grid.Column>
                  <Gallery images={BENEDICT} />
                  <br />
                  <br />
                  <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                      How We met Zippy{" "}
                    </Header>
                  </p>
                </Grid.Column>
                <p>
                  <Label basic color="violet" as="h1">
                    W
                  </Label>
                  e met Zippporah on one of her first trips to America in 2005
                  invited her to our home for a meal and to tell us her story.
                  Her dream for the widows and the needy in Kenya
                </p>
              </Container>
              <Modal trigger={<Button>Read More</Button>} centered={false}>
                <Modal.Header>
                  {" "}
                  <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                      How We met Zippy{" "}
                    </Header>
                  </p>
                </Modal.Header>
                <Modal.Content image>
                  <Image
                    wrapped
                    size="medium"
                    src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                  />
                  <Modal.Description>
                    <p>
                      Through the years we have had meetings of information
                      about{" "}
                      <Label basic color="violet" as="h1">
                        WOHA
                      </Label>
                      , and making people aware of the opportunity to sponsor
                      children. We have visited Nathaniel's school and met these
                      sponsored children. This is a Christian school with high
                      moral standards. Many of these children excel and have
                      high aspirations because of the chance they are given at
                      chance for a good education. From time to time these
                      children will write letters to their sponsors expressing
                      their appreciation for being sponsored and sharing how
                      they are doing in school and what their goals and dreams
                      are. This is much appreciated by those sponsoring. Some of
                      the sponsors wish this correspondence could be even more
                      frequent. Sponsors are able to send gifts to their
                      children when someone visits America. Thank you letters
                      are most often sent by the children.
                    </p>
                    <p>
                      We assist with the financial aspects of{" "}
                      <Label basic color="violet" as="h1">
                        WELL OF HOPE AMERICA
                      </Label>
                      -keeping record of deposits and what they are for, wiring
                      money from WOHA to WOHI, and sending year end contribution
                      letters to donors.
                    </p>
                    <p>
                      We praise God for this opportunity to serve His people and
                      for bringing Zippporah, Nat and their lovely family into
                      our lives.
                    </p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
              <Header>
                <Label color="violet">Christ'n MaryBeth Benedict</Label>
              </Header>
            </Grid.Column>
            <Divider />
          </Grid.Row>

          <Divider color="blue" horizontal>
            <Header.Content>
              {" "}
              <Header as="h1" color="red">
                {" "}
                IMPACT{" "}
              </Header>
            </Header.Content>
          </Divider>
          <Grid.Row>
            <Grid.Column>
              <Container>
                <Grid.Column>
                  <Gallery images={BENEDICT} />
                  <br />
                  <br />
                  {/* <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                      Why Do I build Homes For Widows in Kenya?{" "}
                    </Header>
                  </p> */}
                </Grid.Column>
                <p>
                  I was so overwhelmed by the love of Nat and Zipporah had for
                  us. Through this love, I learned of Christ and gave my life to
                  Him. My life has never been the same. I had lost all hope in
                  life, but regained it. I felt strengthened every time I
                  listened to the testtimonies of other group members of what
                  God was doing in their lives. The book of Habakkuk 2:3 states
                  'for a revelation awaits an appointed time; it speaks of the
                  end and will not prove false.
                </p>
              </Container>
              <Modal trigger={<Button>Read More</Button>} centered={false}>
                <Modal.Header>
                  {" "}
                  <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                      <Label color="violet">LYDIAH WANJIRU</Label>
                    </Header>
                  </p>
                </Modal.Header>
                <Modal.Content image>
                  <Image
                    wrapped
                    size="medium"
                    src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                  />
                  <Modal.Description>
                    <p textAlign="center">
                      I was so overwhelmed by the love of Nat and Zipporah had
                      for us. Through this love, I learned of Christ and gave my
                      life to Him. My life has never been the same. I had lost
                      all hope in life, but regained it. I felt strengthened
                      every time I listened to the testtimonies of other group
                      members of what God was doing in their lives. The book of
                      Habakkuk 2:3 states 'for a revelation awaits an appointed
                      time; it speaks of the end and will not prove false.
                    </p>

                    <p textAlign="center">
                      Though it may linger, wait for it; it will certainly come
                      and will not delay.' God showered me with blessings, just
                      at the right time. I was given land and a house was built
                      on it. I remember I sat on the floor and cried like a
                      baby, thanking God. I pray that the Lord will bless you
                      and your family for generations to come
                    </p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
              <Header>
                <Label color="violet">LYDIAH WANJIRU</Label>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Grid.Column>
                <Container>
                  <Grid.Column>
                    <Gallery images={BENEDICT} />
                    <br />
                    <br />
                    {/* <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                      Why Do I build Homes For Widows in Kenya?{" "}
                    </Header>
                  </p> */}
                  </Grid.Column>
                  <p textAlign="center">
                    I thank God for Ed and Mindy Morrison who are my sponsors.
                    They built my house. They are also sponsoring my children's
                    education. In addition, they bought a chicken coop and a
                    toilet for me. I thank God every day for the care I have
                    received from WELL OF HOPE.
                  </p>
                </Container>
                <Modal trigger={<Button>Read More</Button>} centered={false}>
                  <Modal.Header>
                    {" "}
                    <p>
                      <Header as="h3" color="blue" textAlign="center">
                        {" "}
                        <Label color="violet">JANE WANJIKU</Label>
                      </Header>
                    </p>
                  </Modal.Header>
                  <Modal.Content image>
                    <Image
                      wrapped
                      size="medium"
                      src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                    />
                    <Modal.Description>
                      <p textAlign="center">
                        I thank God for Ed and Mindy Morrison who are my
                        sponsors. They built my house. They are also sponsoring
                        my children's education. In addition, they bought a
                        chicken coop and a toilet for me. I thank God every day
                        for the care I have received from WELL OF HOPE.
                      </p>

                      <p textAlign="center">
                        Nat and Zipporah supported me even when my family and
                        friends turned their backs on me. For that I pray that
                        God would richly bless them. May God's favor shine over
                        THE WELL OF HOPE teamhere in Kenya and in other parts of
                        the world. May He expand their territories so that they
                        will be able to reach many more needy people.
                      </p>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
                <Header>
                  <Label color="violet">JANE WANJIKU</Label>
                </Header>
              </Grid.Column>
            </Grid.Column>
            <Grid.Column>
              <Container>
                <Grid.Column>
                  <Gallery images={BENEDICT} />
                  <br />
                  <br />
                  {/* <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                      Why Do I build Homes For Widows in Kenya?{" "}
                    </Header>
                  </p> */}
                </Grid.Column>
                <p>
                  A friend told me about a village called Lemaloi where I could
                  lease land annually for 1000Kshs per acre. I was able to lease
                  two acres where I brought up my children. She also told me of
                  a fellowship meeting for widows at Mlimani. I attended the
                  next meeting. These meetings really strengthened me because I
                  found a place where I could relate with people who understood
                  my epxeriences.
                </p>
              </Container>
              <Modal trigger={<Button>Read More</Button>} centered={false}>
                <Modal.Header>
                  {" "}
                  <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                      <Label color="violet">ALICE NJERI</Label>
                    </Header>
                  </p>
                </Modal.Header>
                <Modal.Content image>
                  <Image
                    wrapped
                    size="medium"
                    src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                  />
                  <Modal.Description>
                    <p textAlign="center">
                      A friend told me about a village called Lemaloi where I
                      could lease land annually for 1000Kshs per acre. I was
                      able to lease two acres where I brought up my children.
                      She also told me of a fellowship meeting for widows at
                      Mlimani. I attended the next meeting. These meetings
                      really strengthened me because I found a place where I
                      could relate with people who understood my epxeriences.
                    </p>

                    <p textAlign="center">
                      In one of the meetings, Nat called out a list of the
                      people who were going to benefit by getting land. I was
                      among them. Words can't really explain what joy filled my
                      heart. I had finally found a place to call home. I am
                      happy for the toilet, chicken coop and the land that was
                      given to me. No words can match what I feel when I think
                      of Nat and Zipporah and what they have done for my family.
                      My prayer is that God will forever bless them.
                    </p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
              <Header>
                <Label color="violet">ALICE NJERI</Label>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Divider color="blue" horizontal>
            <Header.Content>
              {" "}
              <Header as="h1" color="red">
                {" "}
                VOLUNTEERS{" "}
              </Header>
            </Header.Content>
          </Divider>
          <Grid.Row>
            <Grid.Column>
              <Container>
                <Grid.Column>
                  <Gallery images={BENEDICT} />
                  <br />
                  <br />
                  <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                      NAT'S STORY{" "}
                    </Header>
                  </p>
                </Grid.Column>
                <p>
                  In 1982, when I went to Bible school, I knew my life would be
                  spent in the pulpit, preaching the word of God. I was
                  passionate about being a pastor and taking care of the church.
                  My heart was to preach the true gospel and to bring people to
                  Christ. I had no plans to go beyond that boundary.
                </p>
              </Container>
              <Modal trigger={<Button>Read More</Button>} centered={false}>
                <Modal.Header>
                  {" "}
                  <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                      NAT'S STORY{" "}
                    </Header>
                  </p>
                </Modal.Header>
                <Modal.Content image>
                  <Image
                    wrapped
                    size="medium"
                    src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                  />
                  <Modal.Description>
                    <p textAlign="center">
                      That was the Nat I saw in myself becoming, but little did
                      I know the Lord was preparing me like he did with Moses
                      because I was to take a bigger role that would need more
                      commitment and dedication.
                    </p>
                    <p textAlign="center">
                      I had no idea where He would lead me. Today there is no
                      doubt that the Lord wanted me to serve Him in a different
                      pulpit where my life would change completely to become the
                      helper in accomplishing the dream and the vision that He
                      put in my wife's heart.
                    </p>
                    <p textAlign="center">
                      It is such an encouragement that when the Lord calls you
                      to serve Him; He brings the right people to serve with
                      you. I am humbled by all the people that the Lord has put
                      together to make this vision a reality.
                    </p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
              <Header>
                <Label color="violet">NATHANIEL KARIUKI</Label>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Container>
                <Grid.Column>
                  <Gallery images={BENEDICT} />
                  <br />
                  <br />
                  <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                    </Header>
                  </p>
                </Grid.Column>
                <p>
                  I will never forget the day ZIpporah approached me and shared
                  with me the burden she has with widows and how the Lord wanted
                  her give them a listening ear and be their mouth piece. Having
                  been raised by a widow, this moved me so much because I know
                  the challenges my mum had bringing us up.
                </p>
              </Container>
              <Modal trigger={<Button>Read More</Button>} centered={false}>
                <Modal.Header>
                  {" "}
                  <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                      Why Do I build Homes For Widows in Kenya?{" "}
                    </Header>
                  </p>
                </Modal.Header>
                <Modal.Content image>
                  <Image
                    wrapped
                    size="medium"
                    src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                  />
                  <Modal.Description>
                    <p textAlign="center">
                      When Zipporah shared with me this vision, I knew this
                      originated from God because off the passion she had in
                      fulfilling her mission and the evident tears that rolled
                      down her cheeks. I never hesitated to pledge my support
                      for this noble course which I assist in many ways to date.
                    </p>
                    <p textAlign="center">
                      I feel so happy to be part of this ministry which is
                      touching and transforming the lives of the widows not only
                      through the word but of God but by showing them that there
                      is someone who cares and willing to give them a listening
                      ear and a shoulder to cry or lean on. Well Of Hope has
                      grown ever since its inititation and so many programs run
                      under it.
                    </p>
                    <p textAlign="center">
                      When I last visited Kenya with my wife, together with Nat
                      and Zipporah were involved in a feeding program. I
                      remember how the faces of those dear widows shone with joy
                      and hope when it dawned on them that someone cares for
                      them in this difficult situation. The climax came when I
                      witnessed women bursting in shouts and tears of joy saying
                      that they never knew they could ever own a place of their
                      own.
                    </p>
                    <p textAlign="center">
                      Thank you Nat and Zipporah, thank you for giving my wife
                      and I an opportunity to serve the Lord In the well of
                      hope. Its the only thing that gives me a lot of
                      fulfillment and for this we are really honored.
                    </p>
                    <p>
                      {" "}
                      <Label basic color="violet">
                        {" "}
                        <Label color="violet">JOHN 7:38</Label> "Whoever
                        believes in me, as the scripture has said, streams of
                        living water will flow from within him"
                      </Label>
                    </p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
              <Header>
                <Label color="violet">PASTOR JOHN KIPEEN</Label>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Container>
                <Grid.Column>
                  <Gallery images={BENEDICT} />
                  <br />
                  <br />
                  <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                      SERVING HUMANITY{" "}
                    </Header>
                  </p>
                </Grid.Column>
                <p>
                  {" "}
                  <Label basic color="violet">
                    {" "}
                    <Label color="violet">Mathew 25:35-37</Label>
                    "For I was hungry and you gave me something to eat, I was
                    thirsty and you gave me something to drink, I was a stranger
                    and you invited me in, I needed clothes and you clothed me,
                    I was sick and you looked after me, I was in prison and you
                    came to visit me "
                  </Label>
                </p>
                <br />
              </Container>
              <Modal trigger={<Button>Read More</Button>} centered={false}>
                <Modal.Header>
                  {" "}
                  <p>
                    <Header as="h3" color="blue" textAlign="center">
                      {" "}
                      SERVING HUMANITY{" "}
                    </Header>
                  </p>
                </Modal.Header>
                <Modal.Content image>
                  <Image
                    wrapped
                    size="medium"
                    src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                  />
                  <Modal.Description>
                    <p textAlign="center">
                      Religion that God our father accepts as pure and faultless
                      is this: to look after orphans and widows in their
                      distress and to keep one self from being polluted by the
                      world... James 1:27
                    </p>
                    <p textAlign="center">
                      Serving humanity has always been the heart beat of God.
                      The world is full of peoplewho are living below the
                      poverty level. Even meeting their basic needs become a
                      very big challenge to them. This may be attributed to lack
                      of education and opportunities while others are just
                      outright lazy. At the same time I believe others are also
                      there so that God can create a conducive environment for
                      somebody to become a vessel of honor and be used by God to
                      meet their needs. THe Bible says "... you will always have
                      the poor in your midst." and yet God Almighty can make
                      everybody able to meet their own basic needs.
                    </p>
                    <p textAlign="center">
                      However, the bottom-line is who will allow God to use them
                      to become Hope to the hopeless? THey cry unto God for
                      help. I have seen the demonstration of these scriptures
                      through the Well Of Hope International. I have interacted
                      with the directors so closely hence got the opportunity to
                      know the impact this ministry has brought to many needy
                      families.
                    </p>
                    <p textAlign="center">
                      I am personally proud to be associated with the Well Of
                      Hope International and I pray that God open more doors for
                      this great ministry to be able to fulfill its calling. God
                      bless Zipporah and Nathaniel and all the well wishers and
                      friends of Well Of Hope.
                    </p>
                    <p>
                      {" "}
                      <Label basic color="violet">
                        {" "}
                        <Label color="violet">Mathew 24:45-47</Label>
                        "Who Then is the faithful and wise servant, whom the
                        master has put in charge of the servants in his
                        household to give them their food at the proper time? It
                        will be good for that servant whose master finds him
                        doing so when he returns. I tell you the truth; He will
                        put him in charge of all His possessions "
                      </Label>
                    </p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
              <Header>
                <Label color="violet">
                  BISHOP CHARLES OLE MELIYIO; SHEKINAH PENTECOSTAL CHURCH
                </Label>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Causes;
