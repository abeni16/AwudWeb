import './App.css';
import LeftMenu from './Components/LeftMenu';
import React from 'react';
import Music from './Pages/Music';
import Podcast from './Pages/Podcast';
import AudioBook from './Pages/AudioBook';
import Lyibrary from './Pages/Lyibrary';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <LeftMenu/>
      <Routes>
      <Route path="/" element={<Music/> } />
      <Route path="/podcast" element={< Podcast/>} />
      <Route  path="/audiobook" element={<AudioBook/> }/>
      <Route  path="/lyibrary" element={<Lyibrary/> }/>
    </Routes>
  </BrowserRouter> 
  </div>
  )
}

export default App;
