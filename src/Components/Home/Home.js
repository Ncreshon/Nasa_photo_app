import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

import axios from "axios";
import moment from "moment";
import "./Home.css";

function Home() {
  const [todaysImage, setTodaysImage] = useState({});
  const [imageDate, setImageDate] = useState();

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://api.nasa.gov/planetary/apod?api_key=6RGd8QNuiA9pfsN786Q6uzjj6aTHdGsrFiKrl41g`,
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
        <h1 className="title">Today's Photo of the Day</h1>
        <h2>{imageDate}</h2>
        <h3>{todaysImage.title}</h3>
        <Image fluid src={todaysImage.url} alt={todaysImage.title} />
        <p className="description"> {todaysImage.explanation}</p>
      </main>
    </div>
  );
}

export default Home;
