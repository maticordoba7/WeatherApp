import React from 'react';
import "./Card.css"

function Card ({city, deleteCity}) {
    return(
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={deleteCity} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <div className="main">
            <div className="cityName">
            <h5 className="card-title">{city.name}</h5>
            <p id="description">{city.weather[0].description}</p>
            </div>
            <div className="flag">
            <img src={`https://www.countryflags.io/${city.sys.country}/flat/64.png`} class="card-img-top" width="60px" height="60px" alt="..."/>

            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{city.main.temp_min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{city.main.temp_max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4" id="iconWeather">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+city.weather[0].icon+"@2x.png"} width="70" height="70" alt="" />
            </div>
          </div>
        </div>
      </div>
      )
  }     

export default Card