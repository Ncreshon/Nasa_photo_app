import {  useState } from "react";
import { Button, Image } from "react-bootstrap";

import axios from "axios";
import moment from "moment";
import DatepickerComponent from "../DatePicker/DatePicker";
import "./PhotoOfDay.css";

function PhotoOfDay() {
  const [todaysImage, setTodaysImage] = useState({});
  const [imageDate, setImageDate] = useState();
  const [searchDate, setSearchDate] = useState(moment().format("YYYY-MM-DD"));

  const search = ()=> {
    const config = {
      method: "get",
      url: `https://api.nasa.gov/planetary/apod?api_key=6RGd8QNuiA9pfsN786Q6uzjj6aTHdGsrFiKrl41g&date=${searchDate}`,
      headers: {},
    };
    axios(config)
      .then(function (response) {
       setTodaysImage(response.data);
       setImageDate(moment(response.data.date).format("dddd, MMMM Do YYYY"))
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }

  return (
    <div className="pod">
      <header className="row">
        <div className="col-md-8">
          <DatepickerComponent
            setSearchDate={setSearchDate}
          />
        </div>
        <div className="col-md-4">
          <Button variant="outline-info" onClick={search}>Search</Button>
        </div>
      </header>

      <main className="main">
       {imageDate && <h1 className="title">{`Photo of the day for ${imageDate}`}</h1>}
        <h2>{todaysImage.title}</h2>
        <Image fluid src={todaysImage.url} alt={todaysImage.title} />
        <p className="description">{todaysImage.explanation}</p>
      </main>
    </div>
  );
}

export default PhotoOfDay;
