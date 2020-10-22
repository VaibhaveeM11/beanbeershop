import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="head">
        <h1>Bean love bear<FontAwesomeIcon icon={faBeer} color='#f28e1c'></FontAwesomeIcon></h1>
      <Router>
      <Switch>
        <Route></Route>
        <Route></Route>
      </Switch>
             <ul className='HearUl'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Favourite'>Favourite</Link></li>
              </ul>
             </Router>
             </header>

      <div>
      
      </div>
    </div>
  );
}
export default Header;
