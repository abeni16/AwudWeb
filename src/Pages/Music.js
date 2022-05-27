import React from 'react'
import "../Styles/MainMenu.css"
// import Categories from './Categories';
import MusicLoveCard from '../Components/MusicLoveCard';
import LovedArtist from '../Components/LovedArtist';
import NewRelease from '../Components/NewRelease';
import Generes from '../Components/Generes';
import TopBar from '../Components/TopBar';
import Categories from '../Components/Podcast/Categories';
const Music = () => {
  return (
    <>
   
    <div className='mainContainer' style={{ overflowY: 'scroll', marginTop:"50px"}} >
    <TopBar/> 
          <MusicLoveCard/> 
          <LovedArtist/>
          <Categories/>
          <NewRelease/>
          <Generes/> 
        </div>
        </>
  )
}

export default Music