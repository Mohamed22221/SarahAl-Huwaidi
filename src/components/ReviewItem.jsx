import React from 'react'
import styled from 'styled-components';
const ReviewItem = ({text ,span}) => {
  return (
    <RevivewItemStyled>
    <p>{text}</p>
    <span>{span}</span>
    </RevivewItemStyled>
  )
}
const RevivewItemStyled = styled.div`
    padding: 1rem 1rem;
    border-left: 6px solid var(--trasparent);
    background-color: var(--background-dark-grey);
    position: relative;
    width: 100%;
    margin-bottom: 80px;
    &:not(:first-child){
        
    }
    &::after{
        content: "";
        position: absolute;
        left: 2rem;
        border-width: .8rem;
        top: 100%;
        border-style: solid;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
    }
    p{
        padding: 1rem 0;
    }
    span{
        position:absolute ;
        bottom:-74px ;
        left:-10px ;
        border:5px solid  var(--trasparent);
   
        padding:5px 10px ;
        
    }
`
export default ReviewItem