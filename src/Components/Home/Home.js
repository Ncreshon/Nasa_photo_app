import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

import axios from "axios";
import moment from "moment";
import "./Home.css";

function Home() {
  const [todaysImage, setTodaysImage] = useState({});
  const [imageDate, setImageDate] = useState();

  useEffect(() => {
    setImageDate(moment("2022-04-04").format("dddd, MMMM Do YYYY"));
    axios.get('/nasa/home')
    .then((res)=> {
      setTodaysImage(res.data);
      setImageDate(moment(res.data.date).format("dddd, MMMM Do YYYY"))
    }).catch(err=>console.log(err))
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
