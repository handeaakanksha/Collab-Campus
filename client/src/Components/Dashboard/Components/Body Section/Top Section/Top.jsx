import React from 'react'
import './top.css'
import './Top.scss'
import userimage from '../../../Assets/userimage.jpg'
import video from '../../../Assets/video.mp4'
import { BiSearchAlt } from 'react-icons/bi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { TbMessageCircle } from 'react-icons/tb'
const Top = () => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
        <h1>Welcome to Collab Campus</h1>
        <p>Hello Aakanksha,Welcome back!!!</p>
        </div>
        <div className='searchBar flex'>
          <input type="text" placeholder='Search Colleges' />
          <BiSearchAlt className='icon'/>
        </div>

        <div className='adminDiv flex'>
          <TbMessageCircle className='icon'/>
          <IoNotificationsOutline className='icon'/>
          <div className='userImage'>
            <img src={userimage} alt="User" />
          </div>
        </div>

      </div>

    <div className='cardSection flex'>
      <div className='rightCard flex'>
        <h1>Create and sell extraordinary products</h1>
        <p>the worlds fast growing industry today are natural products !!</p>

        <div className='button flex'>
          <button className='btn'> Explore More</button>
          <button className='btn transparent'>Top Sellers </button>
        </div>

          <div className='videoDiv'>
            <video src={video} autoPlay loop muted></video>
          </div>
      
      </div>
 
      <div className='leftCard flex'>
  <div className='main flex'>
    <div className='textDiv'>
      <div className='studentInfo'>
       <h3>User Information</h3>
        <h2 className='studentName'>Aakanksha Sharma</h2>
        <p className='studentCollege'>XYZ College of Engineering</p>
      </div>
      

    </div>
  </div>
</div>


    </div> 
  
    </div>
  )
}

export default Top