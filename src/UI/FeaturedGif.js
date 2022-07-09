
import React,{useState} from 'react'
import classes from './featuredgif.module.css';
import FeaturedView from './FeaturedView';
function FeaturedGif() {

  const[gif,setGif]=useState([]);

  async function get(){
    var response=await fetch("https://tenor.googleapis.com/v2/featured?key=AIzaSyC556U5EwWw91rNuxHN9kJaguPLUNjY34k&client_key=my_test_app");
    var conversion= await response.json();
    var a=conversion.results.map((fe)=>fe.media_formats.tinygif.url);
    setGif(a);
  }
  get();

    return (
      <div className={classes.featuredgif_container}>
      <h1>Featured GIFs</h1>
      <FeaturedView photo={gif}/>
      </div>
    )

}

export default FeaturedGif