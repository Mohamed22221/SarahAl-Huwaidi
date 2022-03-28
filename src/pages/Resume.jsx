import React from 'react'
import styled from 'styled-components'
import ResumeCom from '../components/ResumeCom'
import SkilsResum from '../components/SkilsResum'
import { Layouts} from '../styles/Layouts'
const Resume = ({text}) => {
  return (
    <div>
    <Layouts>
      <MainResume>
      <SkilsResum   />
        <ResumeCom />
      </MainResume>
    </Layouts>
    </div>
  )
}
const MainResume = styled.div`

`
export default Resume