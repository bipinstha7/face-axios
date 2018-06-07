import React, { Component } from 'react';
import './App.css';

import Navigation from "./components/Navigation";
import Rank from "./components/Rank";
import ImageLinkForm from "./components/ImageLinkForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log("clicked");
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Rank />
        <ImageLinkForm 
          onInputChange= {this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}  
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
