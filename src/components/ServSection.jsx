import React from 'react'
import styled from 'styled-components'
import { LayoutCulame, Layouts } from '../styles/Layouts'
import ServCards from './ServCards'
import Title from './Title'

const ServSection = () => {
  return ( 
      
         <MainSercice>
        <LayoutCulame>
            <Title title={"Courses"} span={"Courses"}/>
        </LayoutCulame>
        <LayoutCulame>
            <ServCards/>
        </LayoutCulame> 
        </MainSercice>

      

   
  )
}
const MainSercice = styled.div`
      padding:0 ;
`
export default ServSection