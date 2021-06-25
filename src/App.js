import React from 'react';
import './App.css';
import Flag from './Flag';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Demo Configcat</h1>
      </header>

      <div className="__actions">
        <button className="__button" type="button">
          Share
        </button>
        <Flag name="demo1">
          <button className="__button" type="button">
            Share with friend
          </button>
        </Flag>
      </div>
    </div>
  );
}

export default App;
