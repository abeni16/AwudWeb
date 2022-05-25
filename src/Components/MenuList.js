import React from 'react'
import {BSFillHourseFill,BsFillHouseFill,BsJournalAlbum} from 'react-icons/bs'
import {FiMusic} from 'react-icons/fi'
import { FaBroadcastTower,FaMicrophoneAlt,FaPodcast } from 'react-icons/fa'
import {CgFolder} from 'react-icons/cg'
import {BiPulse,BiBookOpen} from 'react-icons/bi'
const MenuList = [{
    id:1,
    icon:<FiMusic/>,
    name:"Music",
    to:"/"
},
{
    id:2,
    icon:<FaPodcast/>,
    name:"Podcast",
    to:"/podcast"
},
{
    id:3,
    icon:<BiBookOpen/>,
    name:"AudioBook"
},
{
    id:4,
    icon:<CgFolder/>,
    name:"Lyibrary"
},
]
export default MenuList