import React,{useState,useEffect} from "react";
import classes from './carousel.module.css'; 
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background:#000000; color: #000000`
      );
    }
  };

function Carousel() {

    const[trending,setTrending]=useState([]);
    const[search,setSearch]=useState([]);
const url=`https://tenor.googleapis.com/v2/search?q=${trending[0]}&key=AIzaSyC556U5EwWw91rNuxHN9kJaguPLUNjY34k&client_key=my_test_app&limit=9`

console.log(url);

const fetchSearchHandler = async () => {

  const response = await fetch(url);
  const data = await response.json();
  const converted=data.results.map((fe)=>fe.media_formats.tinygif.url);
  setSearch(converted);
  console.log(converted);
};


    const fetchTrendingHandler = async () => {
  
        const response = await fetch('https://tenor.googleapis.com/v2/trending_terms?key=AIzaSyC556U5EwWw91rNuxHN9kJaguPLUNjY34k&client_key=my_test_app');
        const data = await response.json();
        const check=data.results;
        console.log(check);
        const namelist=check.map((nam)=>(nam));
        setTrending(namelist);
      };
    useEffect(()=>{
      fetchTrendingHandler();
      fetchSearchHandler();
    }
    ,[])

  return (
    <div className={classes.carousel_container}>
    <h2 className={classes.trendingtenor_heading}>Trending Tenor Searches</h2>
    <Slider {...settings}>
      
    <div>
      <img className={classes.photo} src={search[0]} alt="no image found"/>
      <p>{trending[0]}</p>
      </div>
      <div>
      <img className={classes.photo} src={search[1]} alt="no image found"/>
      <p>{trending[1]}</p>
      </div>
      <div>
      <img className={classes.photo} src={search[2]} alt="no image found"/>
      <p >{trending[2]}</p>
      </div>
      <div>
      <img className={classes.photo} src={search[3]} alt="no image found"/>
      <p>{trending[3]}</p>
      </div>
      <div>
      <img className={classes.photo} src={search[4]} alt="no image found"/>
      <p>{trending[4]}</p>
      </div>
      <div>
      <img className={classes.photo} src={search[5]} alt="no image found"/>
      <p>{trending[5]}</p>
      </div>
      <div>
      <img className={classes.photo} src={search[6]} alt="no image found"/>
      <p>{trending[6]}</p>
      </div>
      <div>
      <img className={classes.photo} src={search[7]} alt="no image found"/>
      <p>{trending[7]}</p>
      </div>
      <div>
      <img className={classes.photo} src={search[8]} alt="no image found"/>
      <p>{trending[8]}</p>
      </div>
    </Slider>
    </div>
  )
}

export default Carousel