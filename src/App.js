import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Welcome from './Welcome';
import AboutUs from './AboutUs';
//import YoutubeBackground from 'react-youtube-background'
import bgVideo from './bgVideo.mp4'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="videoContainer">
            <div className="article">
              <Navbar />
              <h1>title</h1>
              <Welcome />
              <AboutUs />
            </div>
          <video className="background-video" 
            autoPlay 
            loop 
            muted 
            src={bgVideo} 
          />
        </div>
      </div>
    );
  }
}

export default App;
