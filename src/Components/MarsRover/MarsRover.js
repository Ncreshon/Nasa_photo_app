import { useEffect, useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import axios from "axios";

import './MarsRover.css'

function MarsRover() {
  const [marsImages, setMarsImages] = useState([]);

  useEffect(() => {
    axios.get('/nasa/marsrover')
    .then((res)=> {
      console.log(res)
      setMarsImages(res.data)
    }).catch(err=>console.log(err))
  }, []);

  return (
    <div>
      <Carousel className="Carousel-Container">
        {marsImages.length > 1 &&
          marsImages.map((img, key) => {
            return (
              <Carousel.Item key={key}>
                <Carousel.Caption>
                  <h3>{img.earth_date}</h3>
                </Carousel.Caption>
                <Image fluid
                  className="d-block w-60 img"
                  src={img.img_src}
                  alt="Mars Rover"
                />
              </Carousel.Item>
            );
          })
        
        }
      </Carousel>
    </div>
  );
}

export default MarsRover;
