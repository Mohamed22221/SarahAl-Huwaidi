import React, { useState } from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import {Layouts} from '../styles/Layouts'
import PortfolioData from '../data/PortfolioData'
import Menue from '../components/Menue'
import ButtonBortfolio from '../components/ButtonBortfolio'

const Portfolio = () => {
  //portfolio Data
    const [menuItem , setMenue] = useState(PortfolioData)
  // function filter data
   const Filter = (button) =>{
     if(button === "All"){
       setMenue(PortfolioData)
       return;
     }
    const DataFilter = PortfolioData.filter((item) =>item.category === button)
    setMenue(DataFilter)
   }

  return (
    <Layouts>
    <MainPortfolio>
    <Title title={'portfolio'} span={'portfolio'} />
    <ButtonBortfolio Filter={Filter} />
    <Menue menueItem={menuItem} />
    </MainPortfolio>
  </Layouts>
  
  )
}
const MainPortfolio = styled.div`
   position:relative ;
   z-index:50 ;
`
export default Portfolio