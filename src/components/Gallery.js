import React, { useState } from "react";
import NoImages from "./NoImages";
import Image from "./Image";
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";

const Gallery = props => {
  const [isOpen, setIsOpen] = useState(false);

  const [photoIndex, setPhotoIndex] = useState(0);
  const results = props.data;
  let images;
  //const tab_images_sm = [];
  const tab_images_xl = [];
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map((image, i) => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      let url_max = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_b.jpg`;

      tab_images_xl[i] = url_max;
    
      return <button type="button" onClick={() => {
        setIsOpen(true);
        setPhotoIndex(i);
      }}>
        <Image url={url} key={id} alt={title} />
      </button>
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <>
      <div>
        <ul>{images}</ul>
        {noImages}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={tab_images_xl[photoIndex]}
          nextSrc={tab_images_xl[(photoIndex + 1) % tab_images_xl.length]}
          prevSrc={tab_images_xl[(photoIndex + tab_images_xl.length - 1) % tab_images_xl.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + tab_images_xl.length - 1) % tab_images_xl.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % tab_images_xl.length)
          }
        />
      )}

    </>
  );
};

export default Gallery;
