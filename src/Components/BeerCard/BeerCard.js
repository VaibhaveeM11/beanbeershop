import React,{useState,useEffect }from "react";
import "./BeerCard.css";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";
// import {Button, Card} from 'react-bootstrap';
function  BeerCard() {
 const[beers, setBeers]=useState([]);
  useEffect(()=>{
      const url='https://api.punkapi.com/v2/beers';
      axios.get(url)
      .then(res=>
        {
          console.log(res)
          setBeers(res.data)

        })
},[])
  return (
    <div  className='card-bear'>

    <ul   id='cardUl'>
   
  {beers.map((beer)=>(

    <li key={beer.id} id='beerLi'>
    <img src={beer.image_url} alt='beer-img' className='bear-img'/>
    <FontAwesomeIcon icon={faBeer} id='beer-fav'/>
    <h5 className='card-title'>{beer.name}</h5>
    <br></br>

    {beer.description}
    </li>

  ))}
     </ul>
    </div>
  );
}
export default BeerCard;