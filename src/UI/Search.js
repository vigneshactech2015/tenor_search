import React from 'react';
import classes from './Search.module.css';
import { FaSearch } from "react-icons/fa";
import {useState,useEffect} from 'react';
import Modal from "./Modal";
function Search() {

  const[search,setSearch]=useState([]);
const[gif,setGif]=useState('');
const [modalOpen, setModalOpen] = useState(false);
const url=`https://tenor.googleapis.com/v2/search?q=${gif}&key=AIzaSyC556U5EwWw91rNuxHN9kJaguPLUNjY34k&client_key=my_test_app&limit=8`




const fetchSearchHandler = async () => {

    const response = await fetch(url);
    const data = await response.json();
    const converted=data.results.map((fe)=>fe.media_formats.tinygif.url);
    setSearch(converted);
    console.log(converted);
  };
useEffect(()=>{
  fetchSearchHandler();}
,[])



const onSubmitHandler=(event)=>{
  event.preventDefault();
  fetchSearchHandler(search);
  setModalOpen(true);
};

  return (
    <div className={classes.search_container}>
    <form onSubmit={onSubmitHandler}>
    <input type="text" className={classes.searchinput} placeholder="Search for GIFs and Stickers" value={gif} onChange={(event)=>setGif(event.target.value)}/>
    <button type="submit" className={classes.SearchIcon}><FaSearch/></button>
    </form>

    {modalOpen && <Modal search={search}
    setOpenModal={setModalOpen}/>}

    </div>
  )
}

export default Search









