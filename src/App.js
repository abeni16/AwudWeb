import './App.css';
import LeftMenu from './Components/LeftMenu';
import MainMenu from './Components/Music'
import React from 'react';
import Music from './Components/Music';
import RightMenu from './Components/RightMenu'
import TopBar from './Components/TopBar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
     {/* <LeftMenu/>
     <TopBar/>    */}
   
    <Routes>
      <Route path="/" element={<Music/> } />
      {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
