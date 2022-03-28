import React from 'react'
import styled from 'styled-components'
import Particless from '../components/Pratcless'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Home = () => {
  return (

    <MainHome>

      <div className='particles-js'>
        <Particless />
      </div>
      <div className='home'>
        <h1>  الأستاذه /<span> سارة الهويدي</span></h1>
        <div className='apout-home'>
         تطوير بيئه العمل وتحفيز نفسي دائما لبذل المزيد من العطاء والإنتاج ومساعده الاخرين وأرغب بتعلم الكثير من المهارات وأتقانها
        </div>
        <div className='icons'>
          <a href='https://github.com/Mohamed22221?tab=repositories' target="_blank">
            <InstagramIcon className='icon' />
          </a>
          <a href='https://www.linkedin.com/in/mohamed-hamdy-94b992219/' target="_blank">
            <LinkedInIcon className='icon' />
          </a>
          <a href='https://www.upwork.com/freelancers/~016ff38454db0dfc84' target="_blank">
            <YouTubeIcon className='icon' />
          </a>

        </div>
      </div>
    </MainHome>
  )
}
const MainHome = styled.div`
    width:100% ;
    height:100vh ;
    position: relative;
    .particles-js{
    z-index:0;
    }
    .home{
      
     position:absolute ;
     top:50% ;
     left:50% ;
     transform:translate(-50%,-50%) ;
      z-index:100 ;
      text-align:center ;
      @media (max-width:1100px) {
        padding: 10px;
        top:50% ;
     left:0% ;
     transform:translate(-1%,-50%) ;
      }
      .apout-home {
        padding:10px 0 ;
        line-height: 29px;
      
     }
      h1 {
        font-size: 64px ;
        color:var(--white-color) ;
          @media (max-width:1100px) {
      
            font-size: 35px ;
            padding: 15px 0;
    }
      span{
        font-size:inherit;
        color:var(--primary-color)
        
      } 
      
    }
      .icons{
        padding:5px ;
         .icon{
           padding:5px 5px ;
           font-size:40px ;
           margin: 0 8px ;
           border: 2px solid var(--border-color) ;
           border-radius:50% ;
           &:hover{
             border-color:var(--primary-color) ;
             transition:0.5s ease-in-out;
             color:var(--primary-color) ;
           }
         }
         
      }
    
    }
`

export default Home