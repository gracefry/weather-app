import './App.css';

function App() {
  return (
    <div className="App">
      <div class="title">
        <h1>QuickWeather</h1>
        <h6>Get the weather using the OpenWeather API</h6>
      </div>
      <div class="section" id="location-form">
        <form>
            <input type="text" id="location" placeholder="Enter a location..."></input>
            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </div>
      <div class="section" id="weather-panel">
        <p>The temperature is:</p>
      </div>
      </div>
  );
}

export default App;
