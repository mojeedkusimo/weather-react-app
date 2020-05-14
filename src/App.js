import React, { useState } from 'react';
const api = {
  key: '0786e0b6c72797557c728a976f5c0ebd',
  base: 'https://api.openweathermap.org/data/2.5/'

}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }

  const dateBuilder = (arg) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[arg.getDay()];
    let date = arg.getDate();
    let month = months[arg.getMonth()];
    let year = arg.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className={(typeof weather.main != 'undefined') 
    ? ((weather.main.temp >35 ) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='Search for a State...' onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
        </div>

        {(typeof weather.main != 'undefined') ? (
          <div>
            <div className='location-box'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>

            <div className='weather-box'>
            <div className='temp'>{Math.round(weather.main.temp)}&#8451;</div>
              {/* <div className='weather'>{weather.weather[0].main}</div> */}
            </div>
          </div>
        ): ('')}
      </main>
    </div>
  );
}

export default App;
