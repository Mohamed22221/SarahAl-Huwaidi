import React from 'react'
import styled from 'styled-components'
import  { useState , useEffect } from 'react';

const ProgresPar = ({title,text}) => {
    const [offset, setOffset] = useState("0");
    useEffect(()=>{
        if(window.scrollY=100){
            setOffset(text)
        }
    })
  return (
    <MainProgress>
  <h6>{title}</h6>
        <div className='progress-par'>
            <p>{text}</p>
            <div className='progress'>
                <span style={{width: offset}}></span>
            </div>
        </div>

    </MainProgress>
  )
}
const MainProgress = styled.div`

        padding:14px ;
    h6{
      font-size:16px ;
      text-transform:uppercase ;
      
    }

   .progress-par{
       display:flex ;
       align-items:center ;
       p{
           padding-right:16px  ;
       }
       .progress{
           position:relative ;
           width:100% ;
           height:9px ;
           background-color:var(--border-color);
           justify-content:space-between ;
           span{
               transition:1.1s ;
               position:absolute ;
               background-color:var(--primary-color);
               top:0 ;
               left:0 ;
               height:inherit ;
           }
       }
   }
`

export default ProgresPar