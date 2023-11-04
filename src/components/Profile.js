import React from 'react'
import '../App.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className='bioprofile'>
       <div className='wrapper'>
        <h1 className='display-4'>Hi , I am   Sharath Shet</h1>
        
        <p className='headline'>I am Software Developer ,
        Specialied in Backend Development with Full-Stack Development Skills Focused on Backend Mastery</p>

        <div>
        <a href="https://github.com/sharu97shet" class="fa fa-github" target="_blank" rel="noopener noreferrer" ></a>
        <a href="https://www.linkedin.com/in/sharathshet" class="fa fa-linkedin" target="_blank" rel="noopener noreferrer" ></a>

        <a href="#" class="fa fa-youtube"  rel="noopener noreferrer" ></a>
        <a href="#" class="fa fa-instagram" rel="noopener noreferrer" ></a>
            
    </div>
       
        </div>
    </div>
  )
}

export default Profile