import React , { useState } from 'react';
import {connect} from 'react-redux'
import { addCity } from '../actions';
import "./NavBar.css";
import swal from 'sweetalert';
const axios = require('axios');
const APIKEY = ""

function NavBar({  addCity, cities, nameCities}) {
  const [city, setCity] = useState([])

  function onSearch(e) { 
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=ES`;
    axios.get(url)
    .then(res => res.data)
    .then(data => {
       if (nameCities.includes(data.name)){
         throw "This city has already been added"
       } else return data
      })
    .then(data => addCity(data))
    .then(succ => swal({
      title: "City ​​added successfully",
      icon: "success"
    }))
    .catch(err => {
      if (err === "This city has already been added") {
        swal({
          title: err,
          icon: "error"
        })
      } else {
        swal({
          title: "Sorry. We couldn't find '" + city + "'" ,
          icon: "error"
        })
      }
    })
    .then(t => document.getElementById("inputSearch").value = "")
  }
        return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand">Weather App</a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    </ul>
    <form className="form-inline my-2 my-lg-0" onSubmit ={(e) => {onSearch(e)}} >
      <input 
        className="form-control mr-sm-2"
        type="search" 
        placeholder="Search" 
        aria-label="Search"
        id="inputSearch"
        onChange = {e => setCity(e.target.value)}
        />
      <button className="btn btn-outline-success my-2 my-sm-0"  type="submit">Add city</button>
    </form>
  </div>
</nav>

        )
    }


const mapStateToProps = state => {
  return {
    cities: state.cities,
    nameCities: state.nameCities
  }
}


const mapDispatchToProps = dispatch => {
  return {
      addCity: (name) => dispatch(addCity(name))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)