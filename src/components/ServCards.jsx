import React from 'react'
import styled from 'styled-components'
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
const ServCards = () => {
  return (
    <MainServCard>
        <div className='item-card'>
            <BrushIcon className='icon-card' />
            <h4>دبلوم السكرتارية</h4>

        </div>
        <div className='item-card'>
            <CodeIcon className='icon-card' />
            <h4>IT دبلوم</h4>

        </div>
        <div className='item-card'>
            <AspectRatioIcon className='icon-card' />
            <h4>Microsoft Office برامج</h4>
        </div>
        <div className='item-card'>
            <AspectRatioIcon className='icon-card' />
            <h4> home styler</h4>
        </div>
        <div className='item-card'>
            <AspectRatioIcon className='icon-card' />
            <h4>مدرب معتمد</h4>
           

        </div>
        <div className='item-card'>
            <AspectRatioIcon className='icon-card' />
            <h4>تدريب مدربين</h4>
           

        </div>
        <div className='item-card'>
            <AspectRatioIcon className='icon-card' />
            <h4>البرامج التفاعلية للمتعلمين</h4>
        </div>
        <div className='item-card'>
            <AspectRatioIcon className='icon-card' />
            <h4>ورش مختلفه فنون يدوية </h4>
        </div>


        <div className='item-card'>
            <AspectRatioIcon className='icon-card' />
            <h4>ورشة  عجينة البالستر الروسية  تشكيل الورد</h4>
           

        </div>


        <div className='item-card'>
            <AspectRatioIcon className='icon-card' />
            <h4> تصميم ورشة إفتراضية</h4>
           

        </div>
        <div className='item-card'>
            <AspectRatioIcon className='icon-card' />
            <h4> دوره تدريبية للمعلمات والمعلمين الجدد</h4>
           

        </div>
        <div className='item-card'>
            <AspectRatioIcon className='icon-card' />
            <h4> wood &resin ورشة</h4>
           

        </div>
    </MainServCard>
  )
}
const MainServCard = styled.div`
    display:grid ;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    gap: 18px ;
    
      ;
    .item-card{
        background-color:var(--sidebar-dark-color);
        padding:15px ;
        border-top: 6px solid var(--trasparent);
        transition:0.8s ;
        &:hover{
            border-top: 6px solid var(--primary-color);
        }
        &:hover h4::after{
            background-color:var(--primary-color)
        }
        
        h4{
            position:relative ;
            font-weight:900 ;
            
            &::after{
                content:"" ;
                height:5px ;
                width:60px ;
                position:absolute ;
                top:36px ;
                left:0 ;
                background-color:var(--trasparent);
                transition:0.8s ;
               
            }
        }
        p{
            padding:28px 0 8px 0 ;
        }
        .icon-card{
            font-size:70px ;
            color:var(--primary-color) ;
        }

    }
`
export default ServCards