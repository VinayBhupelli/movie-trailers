import React, { useEffect, useState } from 'react'
import './Nav.css'
import img from './netflix_PNG12.png'
import avatar from './Avatar.png'
function Nav() {
    const [Show, handleShow] = useState(false);
    const transitionNavbar = ()=>{
        if(window.scrollY>100)
            handleShow(true);
        else
            handleShow(false);
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar)
        return ()=>{
            window.removeEventListener("scroll",transitionNavbar)
        }
    },[])
    
  return (
    <div className={`nav ${Show && "nav-black"}`}>
        <div className="nav-content">
            <img src={img} alt="Logo" className='nav-logo' />
            <img src={avatar} alt="Avatar" className='nav-avatar' />
        </div>
    </div>
  )
}

export default Nav
