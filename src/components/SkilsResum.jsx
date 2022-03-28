import React, { createContext, useRef } from 'react'
import styled from 'styled-components'
import {LayoutCulame} from '../styles/Layouts'
import Title from '../components/Title'
import ProgresPar from './ProgresPar'

const SkilsResum = () => {
  return (
    <SkilsResume >
        <Title title={'MY SKILLS'} span={'MY SKILLS'} />
        <LayoutCulame>
            <div className='skils'>    
           <ProgresPar 
           title="microsoft"
           text="90%"
           width="90%"
           />
           <ProgresPar 
           title="canva"
           text="85%"
           width="85%"
           />
           <ProgresPar 
           title="home styler"
           text="70%"
           width="70%"
           />
           <ProgresPar 
           title="Mark Book"
           text="80%"
           width="80%"
           />

            
           </div>
        </LayoutCulame>
    </SkilsResume>
  )
}
const SkilsResume = styled.div`
    position: relative ;
    z-index:100 ;
    .skils{
        display:grid ;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width:800px) {
        grid-template-columns: repeat(1, 1fr); 
    }
    }

`
export default SkilsResum