import React from 'react';
import Card from './Card';
import { connect } from "react-redux";
import { addCity, deleteCity } from '../actions';

function Cards({cities, deleteCity}) {

        return (
            <div class="row row-cols-1 row-cols-md-3">
                    {cities?.map(c => {
                        return (
                        <div class="col-sm" key={c.id}>
                            <Card city = {c} key={c.id} deleteCity ={() => deleteCity(c.name)}/>
                        </div>
                        )
                    })}
            </div>
        )
}

const mapDispatchToProps = dispatch => {
    return {
        addCity: (name) => dispatch(addCity(name)),
        deleteCity: (name) => dispatch(deleteCity(name))
    }
}
  
const mapStateToProps = state => {
    return {
        cities: state.cities
    }
}
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cards)