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

      // let latCoord = query => {
      //   let latitude = '';
      //   let Query = query.toLowerCase();

      //   switch (Query) {
      //     case 'lagos':
      //       latitude = '6.58';
      //       break;
      //     case 'abuja':
      //       latitude = '9.06';
      //       break;
      //     default:
      //       latitude = '9.08';
      //       break;
      //   }

      //   return latitude;
      // }

      // let lonCoord = query => {
      //   let longitude = '';
      //   let Query = query.toLowerCase();

      //   switch (Query) {
      //     case 'lagos':
      //       longitude = '3.76';
      //       break;
      //     case 'abuja':
      //       longitude = '7.49';
      //       break;
      //     default:
      //       longitude = '8.68';
      //       break;
      //   }

      //   return longitude;
      // }

      // fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)


      fetch(`${api.base}weather?lat=${latCoord(query)}&lon=${lonCoord(query)}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }

  let lonCoord = query => {
    let longitude = '';
    let Query = query.toLowerCase();

    switch (Query) {
      case 'lagos':
        longitude = '3.76';
        break;
      case 'abuja':
        longitude = '7.49';
        break;
      // case 'abia':
      //   longitude = '7.49';
      //   break;
      default:
        longitude = '8.68';
        break;
    }

    return longitude;
  }

  let latCoord = query => {
    let latitude = '';
    let Query = query.toLowerCase();

    switch (Query) {
      case 'lagos':
        latitude = '6.58';
        break;
      case 'abuja':
        latitude = '9.06';
        break;
      // case 'abia':
      //   latitude = '5.53';
      //   break;
      default:
        latitude = '9.08';
        break;
    }

    return latitude;
  }

  const dateBuilder = (arg) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let hours = arg.getHours();
    let minutes = arg.getMinutes();
    let day = days[arg.getDay()];
    let date = arg.getDate();
    let month = months[arg.getMonth()];
    let year = arg.getFullYear();

    return `${hours}:${minutes}  ${day} ${date} ${month} ${year}`
  }
  return (
    <div className={(typeof weather.main != 'undefined')? 
    (weather.main.temp >= 35 && weather.main.temp < 40 ? 'app clear' : weather.main.temp >= 40 ? 'app very-hot' : weather.main.temp < 30 ? 'app rain' : 'app cloudy') : 'app'}>
      {/* // <div className={typeof weather.main != 'undefined' ? 'app rain': 'app'}> */}
      <main className={(typeof weather.main != 'undefined') ? (weather.main.temp < 30 ? 'main rain' : 'main') : 'main'}>
        <div className='title'>Weather in Nigeria Now</div>
        <div className='search-box'>

          {/* <input type='text' className='search-bar' placeholder='Search for a State...' onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/> */}

          <input list="states" name="state" id="state" className='search-bar' placeholder='Search for a State...' onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
          <datalist id="states" className='datalist'>
            <option value="Abia"/>
            <option value='Abuja'/>
            <option value="Adamawa"/>
            <option value='Akwa Ibom'/>
            <option value='Anambra'/>
            <option value="Bauchi"/>
            <option value="Bayelsa"/>
            <option value='Benue'/>
            <option value='Borno'/>
            <option value="Cross River"/>
            <option value="Delta"/>
            <option value='Ebonyi'/>
            <option value='Edo'/>
            <option value="Ekiti"/>
            <option value="Enugu"/>
            <option value='Gombe'/>
            <option value='Jigawa'/>
            <option value="Kaduna"/>
            <option value="Kano"/>
            <option value='Katsina'/>
            <option value='Kebbi'/>
            <option value="Kogi"/>
            <option value="Kwara"/>
            <option value='Lagos'/>
            <option value='Nasarawa'/>
            <option value="Niger"/>
            <option value="Ogun"/>
            <option value='Ondo'/>
            <option value='Osun'/>
            <option value="Oyo"/>
            <option value="Plateau"/>
            <option value='Rivers'/>
            <option value='Sokoto'/>
            <option value="Taraba"/>
            <option value="Yobe"/>
            <option value='Zamfara'/>
          </datalist>

        </div>
        {(typeof weather.main != 'undefined') ? (
          <div>
            <div className='location-box'>
              <div className='location'>{weather.name }, {weather.sys.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>

            <div className='weather-box'>
            <div className='temp'>{Math.round(weather.main.temp)}&#8451;</div>
              {/* <div className='weather'>{weather.weather[0].icon}</div> */}
            </div>
          </div>
        ): ('')}
      </main>
      {/* <footer>
        <div className='footer'>
          Designed by: <a href='https://mojeedkusimo.github.io/my_portfolio'>Mojeed Kusimo</a><br></br>
          Powered by: <a href='https://reactjs.org'>ReatJS</a>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
