import React, { Component } from 'react';
import { Placeholder } from 'semantic-ui-react'
import  "./common/wellofhope.png"
import Footer from './common/Footer'

const src = 'wellofhope.png'

// const items = [
//     {
//       childKey: 0,
//       image: 'wellofhope.png',
//       header: 'Header',
//       description: 'Description',
//       meta: 'Metadata',
//       extra: 'Extra',
//     },
//     {
//       childKey: 1,
//       image: 'wellofhope.png',
//       header: 'Header',
//       description: 'Description',
//       meta: 'Metadata',
//       extra: 'Extra',
//     },
//   ]


const Testimonials = () => (
  <React.Fragment>
  <Placeholder>
    <Placeholder.Header image>
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
  </Placeholder>
   <Placeholder>
   <Placeholder.Header image>
     <Placeholder.Line />
     <Placeholder.Line />
   </Placeholder.Header>
   <Placeholder.Paragraph>
     <Placeholder.Line />
     <Placeholder.Line />
     <Placeholder.Line />
     <Placeholder.Line />
   </Placeholder.Paragraph>
 </Placeholder>
  <Placeholder>
  <Placeholder.Header image>
    <Placeholder.Line />
    <Placeholder.Line />
  </Placeholder.Header>
  <Placeholder.Paragraph>
    <Placeholder.Line />
    <Placeholder.Line />
    <Placeholder.Line />
    <Placeholder.Line />
  </Placeholder.Paragraph>
</Placeholder>
</React.Fragment>
)

export default Testimonials