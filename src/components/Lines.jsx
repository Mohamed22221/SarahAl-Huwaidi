import React from 'react'
import styled from 'styled-components'

const Lines = () => {
  return (
    <MainLines>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
    </MainLines>
  )
}
const MainLines = styled.div`
   position: absolute;
    bottom:0 ;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
   
    .line{
        
        width: 1px;
        height: 100%;
        background-color: var(--border-color);
        opacity: 0.5;
        z-index: 1;

    }
`
export default Lines