import React from 'react'
import styled from 'styled-components'
import { SideContent } from './SideContent'

const SideBar = ({click,close}) => {
  return (
    <MainNav className={`${click ? "side-par" : ""}`}>
     <SideContent close={close} />
    </MainNav>
  )
}



const MainNav = styled.div`
   

    width: 300px;
    background-color:var( --sidebar-dark-color);
    height: 100%;
    position: fixed;
    overflow: hidden;
    transition:all 0.4s ease-in-out;
    @media (max-width:1100px) {
      transform:translateX(-100%) ;
      z-index: 120;
    }
`
export default SideBar