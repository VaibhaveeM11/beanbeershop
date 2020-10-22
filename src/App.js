import React from 'react';
// import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import BeerCard from './Components/BeerCard/BeerCard'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import FavouriteItem from '././Components/FavouriteItem/FavouriteItem'
function App() {

  return (
    <div className="App">

   
    <Main/>
    <BeerCard/>
    </div>
  );
}

export default App;
