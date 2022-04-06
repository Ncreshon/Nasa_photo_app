import { useEffect, useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import axios from "axios";
import moment from 'moment';

import './MarsRover.css'

function MarsRover() {
  const [marsImages, setMarsImages] = useState([]);

  useEffect(() => {
    const config = {
      method: "get",
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=6RGd8QNuiA9pfsN786Q6uzjj6aTHdGsrFiKrl41g',
      headers: {},
    };
    axios(config)
    .then(function (response) {
      setMarsImages(response.data.photos);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <Carousel className="Carousel-Container">
        {marsImages.length > 1 &&
          marsImages.map((img, key) => {
            return (
              <Carousel.Item key={key}>
                <Carousel.Caption>
                  <h3>{moment(img.earth_date).format("dddd, MMMM Do YYYY")}</h3>
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
