import React from 'react'
import styled from 'styled-components'
import ImgeSection from '../components/ImgeSection'
import RevSection from '../components/RevSection'
import ServSection from '../components/ServSection'
import Title from '../components/Title'
import {Layouts} from '../styles/Layouts'

const About = () => {
  return (
    <Layouts>
      <MainAbout>
      <Title title={'About'} span={'About Me'} />
      <ImgeSection />
      <ServSection />
      
      </MainAbout>
    </Layouts>
    
  )
}

const MainAbout = styled.section`
  
`

export default About