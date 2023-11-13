import AirQualityUTD from "../../air-pollution-visualisation-app/src/components/AirQualityUTD";
import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Luftkvalitetsindeks</h1>
      </header>
      <AirQualityUTD />
    </div>
  );
}

export default App;
