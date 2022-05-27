import React, { useEffect, useState } from 'react'
import "../Styles/MainMenu.css"
// import Categories from './Categories';
import MusicLoveCard from '../Components/MusicLoveCard';
import LovedArtist from '../Components/LovedArtist';
import NewRelease from '../Components/NewRelease';
import Generes from '../Components/Generes';
import TopBar from '../Components/TopBar';
import Recent from '../Components/Podcast/Recent';
import Entertainment from '../Components/Podcast/Entertainment';
import Slider from '../Components/Slider';
import Technology from '../Components/Podcast/Technology';
import Categories from '../Components/Podcast/Categories';
import axios from 'axios';
const Podcast = () => {
  const [Podcasts,setPodcsts] = useState([]);
  useEffect(()=>{
  
    const getPodcast = async ()=>{
      try{
     const res = await axios.get('http://localhost:5000/podcast');
    
     setPodcsts(res.data)
   
     
 
      }
      catch(err){
console.log(err)
      }
   
    }
    getPodcast()
  
  },[])
  return (
    
   <>

    <div className='mainContainer' style={{ overflowY: 'scroll', marginTop:"50px" }} >
        <TopBar/> 
        <Recent/>
        <Entertainment Podcasts={Podcasts} /> 
        <Technology/>
        <Categories/>
       
        </div>
        </>
  )
}

export default Podcast