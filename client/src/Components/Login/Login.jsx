import {useState,useEffect} from 'react'
import './Login.css'
import '../../App.css'
import { Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'


//icons
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

//import our assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/Logo01.jpg'



const Login = () => {
  //UseState Hook to store inputs
  const [loginUserName, setLoginUserName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const navigateTo = useNavigate()

  //Let us now show the message to the user
  const [loginStatus, setLoginStatus] = useState('')
  const [statusHolder, setStatusHolder] = useState('message')

  //onclick let us get what the user has entered
const loginUser = (e)=>{

  //Lets prevent submitting
  e.preventDefault();
  //we shall require Axios to create an API that connects to the server - Lets install that
    Axios.post('http://localhost:3002/login', {
      //Create variable to send to the server through the route
      LoginUserName: loginUserName,
      LoginPassword: loginPassword
    }).then((response)=>{
      console.log()

      if(response.data.message || loginUserName == '' || loginPassword == ''){
        navigateTo('/')
        setLoginStatus(`Credentials Don't Exist!`)

      }
      else{
        navigateTo('/dashboard')
      }
    
    })
  
  }

  useEffect(()=>{
    if(loginStatus !== ''){
      setStatusHolder('showMessage')
      setTimeout(() =>{
        setStatusHolder('message')
      }, 4000);
    }
  }, [loginStatus])

  //Lets clear the form on submit
  const onSubmit = ()=>{
    setLoginUserName('')
    setLoginPassword('')
  }

  return (
    <div className='loginPage flex'>
     <div className="Container flex">

    <div className='videoDiv'>
      <video src={video} autoPlay muted loop></video>

      <div className='textDiv'>
        <h2 className='title'>Where Ideas Meet Action</h2>
        <p>Uniting Students for Collaborative Success</p>
      </div>

      <div className='footerDiv flex'>
        <span className='text'>Dont have an account?</span>
        <Link to={'/register'}>
        <button className='btn'>Sign Up</button>
        </Link>
      </div>
    </div>

    <div className="formDiv flex">
      <div className="headerDiv">
        <img src={logo} alt="Logo Image" />
        <h3>Collab Campus</h3>
      </div>

      <form className='form grid' onSubmit={onSubmit}>
        <span className={statusHolder}>{loginStatus}</span>

        <div className='inputDiv'>
          <label htmlFor="Username">Username</label>
          <div className="input flex">
           <FaUserShield className='icon'/>
           <input type="text" id='username' placeholder='Enter Username'
           onChange={(event)=>{
              setLoginUserName(event.target.value)
           }}/>
          </div>
        </div>

        <div className='inputDiv'>
          <label htmlFor="password">Password</label>
          <div className="input flex">
           <BsFillShieldLockFill  className='icon'/>
           <input type="password" id='password' placeholder='Enter Password'
           onChange={(event)=>{
            setLoginPassword(event.target.value)
           }}/>
          </div>
        </div>

        <button type='submit' className='btn flex' onClick={loginUser}>
          <span>Login</span>
          <AiOutlineSwapRight className='icon'/>
        </button>
           <a href="/dashboard">Dashboard</a>
        <span className='forgotPassword'>
          Forgot your password? <a href="">Click Here</a>
        </span>

      </form>
    </div>


     </div>  
    </div>
  )
}

export default Login
