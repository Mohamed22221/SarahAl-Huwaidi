import React from 'react'
import styled from 'styled-components'
import { LayoutCulame, Layouts } from '../styles/Layouts'
import ReviewItem from './ReviewItem'
import Title from './Title'

const RevSection = () => {
    return (

        <MainReviews>
       <LayoutCulame> 
         <Title title={"REVIEWS"} span={"REVIEWS"}/>
       </LayoutCulame>
        <LayoutCulame>
        <div className="reviews">
                    <ReviewItem 
                        text={'Brother Muhammad is one of the best young people I have dealt with, God willing, he is understanding and professional and accepts modifications with an open heart. I advise dealing with him.'} 
                        span={"Rayan"}
                    />
                    <ReviewItem 
                        text={'Brother Muhammad is one of the best young people I have dealt with, God willing, he is understanding and professional and accepts modifications with an open heart. I advise dealing with him.'} 
                        span={"ahmed"}
                    />
                    
                </div>  
        </LayoutCulame>
        </MainReviews>
  
     
    )
  }
  const MainReviews = styled.div`
     .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
  `  
export default RevSection