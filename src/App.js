import React, { useState } from "react";
import "./App.css";
import DisplaySimpsons from "./components/DisplaySimpsons.jsx";
import axios from "axios";

const sampleSimpsons = {
  quote:
    'For once maybe someone will call me "sir" without adding, "You\'re making a scene."',
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection: "Right",
};

function App() {

  const [simpsons, setSimpsons] = useState(sampleSimpsons);

  const getSimpsons = () => {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setSimpsons(data[0]);
      });
  };

  return (
    <div className="App">
      <DisplaySimpsons simpsons={simpsons} />
      <button type="button" onClick={getSimpsons}>
        Get Simpsons Family's
      </button>
    </div>
  );
}

export default App;