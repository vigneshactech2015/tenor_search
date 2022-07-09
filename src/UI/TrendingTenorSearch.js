import classes from './Slide.module.css';
import React,{useState,useEffect} from "react";

function TrendingTenorSearch(){
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
        <div>
        <h2 className={classes.trendingtenor_heading}>Trending Tenor Searches</h2>
        <div className={classes.container}>
      
        <div>
          <img className={classes.search_image} src={search[0]} alt="no image found"/>
          <p className={classes.search_description}>{trending[0]}</p>
          </div>
          <div>
          <img className={classes.search_image} src={search[1]} alt="no image found"/>
          <p className={classes.search_description}>{trending[1]}</p>
          </div>
          <div>
          <img className={classes.search_image} src={search[2]} alt="no image found"/>
          <p className={classes.search_description}>{trending[2]}</p>
          </div>
          <div>
          <img className={classes.search_image} src={search[3]} alt="no image found"/>
          <p className={classes.search_description}>{trending[3]}</p>
          </div>
          <div>
          <img className={classes.search_image} src={search[4]} alt="no image found"/>
          <p className={classes.search_description}>{trending[4]}</p>
          </div>
          <div>
          <img  className={classes.search_image} src={search[5]} alt="no image found"/>
          <p className={classes.search_description}>{trending[5]}</p>
          </div>
          <div>
          <img className={classes.search_image} src={search[6]} alt="no image found"/>
          <p className={classes.search_description}>{trending[6]}</p>
          </div>
          <div>
          <img className={classes.search_image} src={search[7]} alt="no image found"/>
          <p className={classes.search_description}>{trending[7]}</p>
          </div>
          <div>
          <img className={classes.search_image} src={search[8]} alt="no image found"/>
          <p className={classes.search_description}>{trending[8]}</p>
          </div>
          </div>
      </div>
    );
  }

  export default TrendingTenorSearch;