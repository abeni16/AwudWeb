import React from 'react'
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

const Podcast = () => {
  return (
    <div className='mainContainer' style={{ overflowY: 'scroll', }} >
        <TopBar/> 
        <Recent/>
        <Entertainment/> 
        <Technology/>
        <Categories/>
        </div>
    
  )
}

export default Podcast