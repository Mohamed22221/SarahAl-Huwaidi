import React from 'react'
import styled from 'styled-components'
import { LayoutCulame } from '../styles/Layouts'
const ButtonBortfolio = ({Filter}) => {
  return (
   <LayoutCulame>
    <StyleButoon>
         <button type='button' onClick={()=>Filter("All")}>All</button>
        <button type='button' onClick={()=>Filter("React")}>React</button>
        <button type='button' onClick={()=>Filter("Javascript")}>Javascript</button>

    </StyleButoon>
   </LayoutCulame>   

  )
}
const StyleButoon = styled.div`
display: flex ;
justify-content:center ;

button{
all:unset;
cursor:pointer ;
border-radius:2px ;
background-color:var(--primary-color) ;
margin:5px ;
padding:8px ;
transition:all 0.4s ease-in-out ;
&:active , &:visited , &:focus{
    background-color:var(--background-light-color-2) ;
}
&:hover {
    background-color:var(--background-light-color-2) ;
}

}

    
`
export default ButtonBortfolio