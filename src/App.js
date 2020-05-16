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
      case 'abia':
        longitude = '7.49';
        break;
      case 'adamawa':
        longitude = '12.5';
        break;
      case 'anambra':
        longitude = '7';
        break;
      case 'akwa ibom':
        longitude = '7.93';
        break;
      case 'bauchi':
        longitude = '10';
        break;
      case 'bayelsa':
        longitude = '6.26';
        break;
      case 'benue':
        longitude = '8.52';
        break;
      case 'borno':
        longitude = '13.16';
        break;
      case 'cross river':
        longitude = '8.32';
        break;
      case 'delta':
        longitude = '6';
        break;
      case 'ebonyi':
        longitude = '8.12';
        break;
      case 'edo':
        longitude = '6';
        break;
      case 'ekiti':
        longitude = '3.38';
        break;
      case 'enugu':
        longitude = '7.49';
        break;
      case 'gombe':
        longitude = '11.17';
        break;
      case 'imo':
        longitude = '7.03';
        break;
      case 'jigawa':
        longitude = '12.02';
        break;
      case 'kaduna':
        longitude = '7.44';
        break;
      case 'kano':
        longitude = '8.52';
        break;
      case 'katsina':
        longitude = '7.6';
        break;
      case 'kebbi':
        longitude = '4';
        break;
      case 'kogi':
        longitude = '7.47';
        break;
      case 'kwara':
        longitude = '9.68';
        break;
      case 'nasarawa':
        longitude = '7.72';
        break;
      case 'niger':
        longitude = '6.56';
        break;
      case 'ogun':
        longitude = '4.25';
        break;
      case 'ondo':
        longitude = '4.83';
        break;
      case 'osun':
        longitude = '5.09';
        break;
      case 'oyo':
        longitude = '3.93';
        break;
      case 'plateau':
        longitude = '8.9';
        break;
      case 'rivers':
        longitude = '7.17';
        break;
      case 'sokoto':
        longitude = '5.24';
        break;
      case 'taraba':
        longitude = '11.37';
        break;
      case 'yobe':
        longitude = '11.96';
        break;
      case 'zamfara':
        longitude = '12.09';
        break;
      default:
        longitude = '8';
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
      case 'abia':
        latitude = '5.53';
        break;
      case 'adamawa':
        latitude = '9.33';
        break;
      case 'anambra':
        latitude = '6.33';
        break;
      case 'akwa ibom':
        latitude = '5.03';
        break;
      case 'bauchi':
        latitude = '10.5';
        break;
      case 'bayelsa':
        latitude = '4.92';
        break;
      case 'benue':
        latitude = '8.32';
        break;
      case 'borno':
        latitude = '11.85';
        break;
      case 'cross river':
        latitude = '4.95';
        break;
      case 'delta':
        latitude = '5.5';
        break;
      case 'ebonyi':
        latitude = '6.32';
        break;
      case 'edo':
        latitude = '6.5';
        break;
      case 'ekiti':
        latitude = '7.13';
        break;
      case 'enugu':
        latitude = '6.44';
        break;
      case 'gombe':
        latitude = '10.29';
        break;
      case 'imo':
        latitude = '5.43';
        break;
      case 'jigawa':
        latitude = '9.6';
        break;
      case 'kaduna':
        latitude = '10.59';
        break;
      case 'kano':
        latitude = '12';
        break;
      case 'katsina':
        latitude = '12.99';
        break;
      case 'kebbi':
        latitude = '11.5';
        break;
      case 'kogi':
        latitude = '9.18';
        break;
      case 'kwara':
        latitude = '11.9';
        break;
      case 'nasarawa':
        latitude = '8.53';
        break;
      case 'niger':
        latitude = '9.61';
        break;
      case 'ogun':
        latitude = '8.53';
        break;
      case 'ondo':
        latitude = '7.1';
        break;
      case 'osun':
        latitude = '7.98';
        break;
      case 'oyo':
        latitude = '7.85';
        break;
      case 'plateau':
        latitude = '9.92';
        break;
      case 'rivers':
        latitude = '4.45';
        break;
      case 'sokoto':
        latitude = '13.06';
        break;
      case 'taraba':
        latitude = '8.88';
        break;
      case 'yobe':
        latitude = '11.75';
        break;
      case 'zamfara':
        latitude = '10.16';
        break;
      default:
        latitude = '10';
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
    (weather.main.temp < 30 ? 'app rain' : weather.main.temp > 29 && weather.main.temp < 32 ? 'app cloudy' : weather.main.temp > 31 && weather.main.temp <= 34 ? 'app clear' : weather.main.temp > 35 ? 'app very-hot' : 'app clear') : 'app'}>
      {/* // <div className={typeof weather.main != 'undefined' ? 'app rain': 'app'}> */}
      <main className={(typeof weather.main != 'undefined') ? (weather.main.temp < 29 ? 'main rain' : 'main') : 'main'}>
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
            <option value='Imo'/>
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
              <div className='location'>{weather.name === 'Uyo' ? 'Akwa Ibom' : weather.name === 'Lafia' ? 'Benue' : weather.name === 'Maiduguri' ? 'Borno' : weather.name === 'Calabar' ? 'Cross River' : weather.name === 'Jos' ? 'Plateau' : weather.name === 'Yenagoa' ? 'Bayelsa' : weather.name === 'Abeokuta' ? 'Ekiti' : weather.name === 'Numan' ? 'Jigawa' : weather.name === 'Maitama' ? 'Kogi' : weather.name === 'Shani' ? 'Zamfara' : weather.name === 'Bonny' ? 'Rivers' : weather.name === 'Ipoti' ? 'Osun' : weather.name === 'Alapa' ? 'Ogun' : weather.name === 'Damaturu' ? 'Yobe' :weather.name === 'Jalingo' ? 'Taraba' : weather.name === 'Jigawa State' ? 'Kwara' : weather.name === 'Abakaliki' ?  'Ebonyi' : weather.name === 'Minna' ? 'Niger' : weather.name === 'Owerri' ? 'Imo' : weather.name === 'Umuahia' ? 'Abia' : weather.name }, {weather.sys.country}</div>
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
