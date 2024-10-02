import React from 'react'
import logo from '../../Assets/logo.jpg';
import './sidebar.css';
//import '../../App.css';
//import {IoMdSpeedometer} from 'react-icons/io'
import { GoPlus } from "react-icons/go";
import { MdJoinFull } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { CiChat1 } from "react-icons/ci";
import{BsQuestionCircle} from "react-icons/bs";



const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className='logoDiv grid'>
        <img src={logo} alt=" logo" />
        <h2>Collab Campus</h2>
      </div>
 
 <div className='menuDiv'>
  <h3 className='divTitle'>
    Quick Menu
  </h3>
  <ul className='menuLists grid'>
    <li className='listItem'>
      <a href="#listitem" className='menuLink flex'>
     <GoPlus className="icon"/>
     <span className='smallText'>Create New Server</span>
      </a>
    </li>

    <li className='listItem'>
      <a href="#listitem" className='menuLink flex'>
     <MdJoinFull className="icon"/>
     <span className='smallText'>Joined Servers </span>
      </a>
    </li>

    <li className='listItem'>
      <a href="#listitem" className='menuLink flex'>
     < MdExplore className="icon"/>
     <span className='smallText'>Explore </span>
      </a>
    </li>

    <li className='listItem'>
      <a href="#project" className='menuLink flex'>
     < GrProjects className="icon"/>
     <span className='smallText'>Projects </span>
      </a>
    </li>

    
    
  </ul>
 </div>

 <div className='settingDiv'>
  <h3 className='divTitle'>
    CONNECT
  </h3>
  <ul className='menuLists grid'>
    <li className='listItem'>
      <a href="#menu" className='menuLink flex'>
     < CiChat1 className="icon"/>
     <span className='smallText'>Chat </span>
      </a>
    </li>
  </ul>
 </div>

<div className='sidebarCard'>
<BsQuestionCircle className="icon"/>  
 <div className='cardContent'>
  <div className='circle1'></div>
    <div className='circle2'></div>
      <h3>Help Center</h3>
      <p>Having any Issues, Please contact us for more questions !!</p>
      <button className='btn'>Go to help center</button>
      </div>   
  
</div>

    </div>
  )
}

export default Sidebar