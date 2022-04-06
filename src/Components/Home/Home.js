import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

import axios from "axios";
import moment from "moment";
import "./Home.css";

function Home() {
  const [todaysImage, setTodaysImage] = useState({});
  const [imageDate, setImageDate] = useState();
  
  console.log(process.env)

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}`,
      headers: {},
    };
    setImageDate(moment("2022-04-04").format("dddd, MMMM Do YYYY"));

    axios(config)
      .then(function (res) {
        setTodaysImage(res.data);
        setImageDate(moment(res.data.date).format("dddd, MMMM Do YYYY"));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="pod">
      <main>
        <h1>{imageDate}</h1>
        <h2>{todaysImage.title}</h2>
        <Image fluid src={todaysImage.url} alt={todaysImage.title} />
        <p className="description"> {todaysImage.explanation}</p>
      </main>
    </div>
  );
}

export default Home;
