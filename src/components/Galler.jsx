import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

const IMAGES =
[{
        src: require('./common/assets/img/spons.jpg'),
        alt: require('./common/assets/img/spons.jpg'),
        thumbnail: './common/assets/img/spons.jpg',
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./common/assets/img/spons.jpg'),
        thumbnail: './common/assets/img/spons.jpg',
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: require('./common/assets/img/spons.jpg'),
    thumbnail: './common/assets/img/spons.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: require('./common/assets/img/spons.jpg'),
    thumbnail: './common/assets/img/spons.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: require('./common/assets/img/spons.jpg'),
    thumbnail: './common/assets/img/spons.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: require('./common/assets/img/spons.jpg'),
    thumbnail: './common/assets/img/spons.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: require('./common/assets/img/spons.jpg'),
    thumbnail: './common/assets/img/spons.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: require('./common/assets/img/spons.jpg'),
    thumbnail: './common/assets/img/spons.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: require('./common/assets/img/spons.jpg'),
    thumbnail: './common/assets/img/spons.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: require('./common/assets/img/spons.jpg'),
    thumbnail: './common/assets/img/spons.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: require('./common/assets/img/spons.jpg'),
    thumbnail: './common/assets/img/spons.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: require('./common/assets/img/spons.jpg'),
    thumbnail: './common/assets/img/spons.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: require('./common/assets/img/spons.jpg'),
    thumbnail: './common/assets/img/spons.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: require('./common/assets/img/spons.jpg'),
    thumbnail: './common/assets/img/spons.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: "Boats (Jeshu John - designerspics.com)"
},
{
        header: 'Project Report - June',
        src: require('./common/assets/img/spons.jpg') ,
        thumbnail: './common/assets/img/spons.jpg',
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]
const Galler = () => {
    return ( 
         <React.Fragment>
              <Gallery images={IMAGES}/>
              <p>hey i am an image</p>
         </React.Fragment>
     );
}
 
export default Galler;