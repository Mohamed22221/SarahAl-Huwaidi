import React, { useState } from 'react'
import { NavLink ,useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Avatar from '../img/myphoto.jpg'


export const SideContent = ({close}) => {
    let location = useLocation();
    const  [active ,setActive] = useState("unactive") 
 const activeFunction = () =>{
    setActive("active")
 }
  return (
    <NavSideBar >
        <div className='avatar'>
            <img src={Avatar} alt="my-photo" />
        </div>
        <ul>
            <li className='nav-item' >
                <NavLink onClick={close} to='/Mohamed'  >Home</NavLink>
            </li>
            <li className='nav-item' onClick={activeFunction}>
                <NavLink onClick={close} to='/about'>About</NavLink>
            </li>
            <li className='nav-item' onClick={activeFunction}>
                <NavLink onClick={close} to='/resume'>Resume</NavLink>
            </li>
            <li className='nav-item' onClick={activeFunction}>
                <NavLink onClick={close} to='/portfolio'>Portfolio</NavLink>
            </li>
            <li className='nav-item' onClick={activeFunction}>
                <NavLink onClick={close} to='/blogs' className="active-class">Blogs</NavLink>
            </li>
            <li className='nav-item' onClick={activeFunction}>
                <NavLink onClick={close} to='/contact' className="active-class">Contact</NavLink>
            </li>
            
        </ul>
        <footer className='footer'>
            <p>@My Portfolio</p>
        </footer>
    </NavSideBar>
  )
}



//style css sideBar
const NavSideBar = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid  var(--border-color) ;
   
    .active{
       background-color:  var(--primary-color-light);
       
   }
    .unactive{
       background-color: none;
  }
    
    .avatar{
        width: 100%;
        text-align: center;
        padding: 32px 0;
        border-bottom: 1px solid  var(--border-color);
        img{
            width: 80% ;
            border-radius:20% ;
            border: 9px solid var(--border-color);
        }
    
    }
    ul{
        width: 100%;
    
    
    .nav-item {
        text-align: center;
       display:block;
       position:relative;
       
    a{
       display:block;
       width: 100%;
       padding: 6px;
       text-transform:uppercase ;
       letter-spacing:1px ;
       font-size:1rem ;
      
        
    }
    &:hover{
       cursor: pointer;
    }
    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 99%;
        background-color: var(--primary-color-light);
        transition:All 0.4s ease-in-out;
        z-index:-1;
        opacity: 0.2;
    }
    &:hover::after{
        width: 100%;
        height: 100%;
        
    }
    }
   }
    .footer{
        border-top: 1px solid  var(--border-color);
        width: 100%;
        text-align: center;
        padding: 15px 0;
    }
    
`
export default SideContent


