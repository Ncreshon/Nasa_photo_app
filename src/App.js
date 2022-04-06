import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "react-bootstrap";

import PhotoOfDay from "./Components/PhotoOfDay/PhotoOfDay";
import MarsRover from "./Components/MarsRover/MarsRover";
import Home from "./Components/Home/Home";
 

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav className="nav">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/PhotoOfTheDay">Past Photos Of The Day</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/MarsRover">Mars Rover Photos</Nav.Link>
          </Nav.Item>
        </Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/PhotoOfTheDay" element={<PhotoOfDay />} />
          <Route exact path="/MarsRover" element={<MarsRover />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
