import React, { useState } from 'react'
import './Nav.css'

const Nav = () => {
  const[active,setactive]=useState('#home');
  const click=(value)=>{
    setactive(value);
  }
  return (
    <>
        <nav>
            <ol>
                <li ><a href="#home" className={active==='#home'?'active':''} onClick={()=>click('#home')}>Home</a></li>
                <li><a href="#skills" className={active==='#skills'?'active':''} onClick={()=>click('#skills')}>Skills</a></li>
            </ol>
        </nav>
    </>
  )
}

export default Nav
