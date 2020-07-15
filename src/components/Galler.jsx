// import React from 'react';
// import { render } from 'react-dom';
// import Layout from '../Layout'
// import Gallery from 'react-grid-gallery';

// const IMAGES =
// [{
//         src: require('./common/assets/img/spons.jpg'),
//         alt: require('./common/assets/img/spons.jpg'),
//         thumbnail: './common/assets/img/spons.jpg',
//         thumbnailWidth: 320,
//         thumbnailHeight: 174,
//         isSelected: true,
//         caption: "After Rain (Jeshu John - designerspics.com)"
// },
// {
//         src: require('./common/assets/img/spons.jpg'),
//         thumbnail: './common/assets/img/spons.jpg',
//         thumbnailWidth: 320,
//         thumbnailHeight: 212,
//         tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//         caption: "Boats (Jeshu John - designerspics.com)"
// },
// {
//     src: require('./common/assets/img/spons.jpg'),
//     thumbnail: './common/assets/img/spons.jpg',
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//     caption: "Boats (Jeshu John - designerspics.com)"
// },
// {
//     src: require('./common/assets/img/spons.jpg'),
//     thumbnail: './common/assets/img/spons.jpg',
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//     caption: "Boats (Jeshu John - designerspics.com)"
// },
// {
//     src: require('./common/assets/img/spons.jpg'),
//     thumbnail: './common/assets/img/spons.jpg',
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//     caption: "Boats (Jeshu John - designerspics.com)"
// },
// {
//     src: require('./common/assets/img/spons.jpg'),
//     thumbnail: './common/assets/img/spons.jpg',
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//     caption: "Boats (Jeshu John - designerspics.com)"
// },
// {
//     src: require('./common/assets/img/spons.jpg'),
//     thumbnail: './common/assets/img/spons.jpg',
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//     caption: "Boats (Jeshu John - designerspics.com)"
// },
// {
//     src: require('./common/assets/img/spons.jpg'),
//     thumbnail: './common/assets/img/spons.jpg',
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//     caption: "Boats (Jeshu John - designerspics.com)"
// },
// {
//     src: require('./common/assets/img/spons.jpg'),
//     thumbnail: './common/assets/img/spons.jpg',
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//     caption: "Boats (Jeshu John - designerspics.com)"
// },
// {
//     src: require('./common/assets/img/spons.jpg'),
//     thumbnail: './common/assets/img/spons.jpg',
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//     caption: "Boats (Jeshu John - designerspics.com)"
// },
// {
//     src: require('./common/assets/img/spons.jpg'),
//     thumbnail: './common/assets/img/spons.jpg',
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//     caption: "Boats (Jeshu John - designerspics.com)"
// },
// {
//     src: require('./common/assets/img/spons.jpg'),
//     thumbnail: './common/assets/img/spons.jpg',
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//     caption: "Boats (Jeshu John - designerspics.com)"
// },
// {
//     src: require('./common/assets/img/spons.jpg'),
//     thumbnail: './common/assets/img/spons.jpg',
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//     caption: "Boats (Jeshu John - designerspics.com)"
// },
// {
//     src: require('./common/assets/img/spons.jpg'),
//     thumbnail: './common/assets/img/spons.jpg',
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//     caption: "Boats (Jeshu John - designerspics.com)"
// },
// {
//         header: 'Project Report - June',
//         src: require('./common/assets/img/spons.jpg') ,
//         thumbnail: './common/assets/img/spons.jpg',
//         thumbnailWidth: 320,
//         thumbnailHeight: 212
// }]
// const Galler = () => {
//     return ( 
//          <React.Fragment>
//              <Layout/>
//               {/* <Gallery images={IMAGES}/> */}
//               {/* <p>hey i am an image</p> */}
//          </React.Fragment>
//      );
// }
 
// export default Galler;

import React, { useState, useEffect } from "react";
import { app } from "../base";
// import { NewAlbumForm } from "../NewAlbumForm";
import { Switch, Route, Link } from "react-router-dom";
import { Album } from "../Album";
import { Home } from "../Home";

const db = app.firestore();

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const unmount = db.collection("albums").onSnapshot((snapshot) => {
      const tempAlbums = [];
      snapshot.forEach((doc) => {
        tempAlbums.push({ ...doc.data(), id: doc.id });
      });
      setAlbums(tempAlbums);
    });
    return unmount;
  }, []);

  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <Home albums={albums} />} />
        <Route path="/:album" component={Album} />
      </Switch>
    </main>
  );
}
export default App;
