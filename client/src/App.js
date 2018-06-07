import React, { Component } from 'react';
import './App.css';

import Navigation from "./components/Navigation";
import Rank from "./components/Rank";
import ImageLinkForm from "./components/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: 'cda9bba25753460ca395d523c518b28d'
  // apiKey: "c9f37abd2a2d4fabbb8f6aac827dbd41"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    console.log(width, height);

    console.log("leftCol:", clarifaiFace.left_col * width);
    console.log("topRow:" ,clarifaiFace.top_row * height);
    console.log("rightCol:", (clarifaiFace.right_col * width));
    console.log("bottomRow:", height - (clarifaiFace.bottom_row * height));

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition 
          imageUrl={this.state.imageUrl} 
          box={this.state.box}  
        />
      </div>
    );
  }
}

export default App;
