import React,{useState,useEffect }from "react";
import Header from '../Header/Header'
import axios from 'axios';
import './Main.css';
function Main()
{
    const[beer, setBeer]=useState({});
    const[id, setIds]=useState(1);
    useEffect(()=>{
        const url=`https://api.punkapi.com/v2/beers/${id}`;
        axios.get(url)
        .then(res=>
          {
            setBeer(res.data)
          })
  },[id])
return(
<div>
<Header/>
<div class="input-group mb-3">
<input type='text' value={id} 
onChange={e=>setIds(e.target.value)} 
placeholder='Search for beer...'
 className='form-control'/>
  <div class="input-group-append">
  <button type="button" className='btn btn-outline-secondary btns' id='button-addon2 '>Search</button>

  </div>

{/* <div className='search-beer'>

  {beer.id}
</div> */}
</div>
</div>);


}
export default Main;