import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselGallery = (props) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  const {data} = props;
  
  const renderGallery =(dat)=>{
          return dat.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 h-100"
                src={image.url}
                alt={image.name}
              />
              <Carousel.Caption>
                <h3>{image.description}</h3>
                <p>{image.longDesc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        )
      }
      return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
          {renderGallery(data)}
        </Carousel>
      );
  };
  
  export default CarouselGallery;