import  Button  from '../components/Button'
import React from 'react'
import styled from 'styled-components'
import MyPhoto2 from '../img/myphoto2.jpg'
const ImgeSection = () => {
  return (
    <MainImgSection>
        <div className='left-about'>
            <div className='img-about'>
                <img src={MyPhoto2} alt="mypohoto"/> 
            </div>
        </div>
        <div className='right-about'>
                <h4> الأستاذة  /<span>سارة الهويدي</span></h4>
            <p className='informition-me'>
            لقد مررت بجميع أنواع التجارب التي قد تتصورها خلال مراحل حياتي  .. إن الحياة تمتلئ بالنجاحات والاخفاقات والهزائم والانتصارات وكل شئ آخر يقع فيما بين ذلك .. لذلك في بعض الأحيان قد تشكل حتى أقل الكلمات فارقا كبيرا تواسي ، تلهم ، تؤلم لذلك علينا أن نعيش بغض النظر عن عدد السماوات التي سقطت و الاهم  من كل ذلك ان لاتفقدوا الأمل أبدًا .. فإن أفضل شعور في العالم هو ان تعلم إن الاحتمالات لا نهايه لها وان الصعوبات والفوضى جزء لا يتجزأ من الحياة إلا إنها تحمل الهبات أيضا .
            </p>
        <div className='about-info'>
            <div className='info-title'>
                <p>Full Name : </p>
                <p>Age : </p>
                <p>Nationality : </p>
                <p>Location : </p>
                <p>Languages :  </p>
                
                <Button title={"Download Cv"} />     
            </div>
            <div className='info'>
                <p>سارة سعد مبارك حمود الهويدي</p>
                <p> 1980/9/1</p>
                <p>كويتية</p>
                <p>الكويت / محافظة األحمدي</p>
                <p>عربي & انجليزي & التركيه</p>
                 
            </div>
            
        </div>
        </div>
    </MainImgSection>
  )
}
const MainImgSection = styled.div`
    position:relative ;
    justify-content:space-between ;
    z-index:50 ;
    display:flex ;
    margin-top: 80px ;
    @media (max-width:1000px) {
        flex-direction:column
        
    }
    .img-about{
        width: 100% ;
        margin-right:1rem ;
        img{
            width:100% ;
        }
    }
    .right-about{
        margin-left:1rem ;
        padding-left:1rem ;
        h4 {
        font-size:2.2rem ;
        color : var(--white-color);
        margin-bottom: 16px ;
        span{
            font-size:2rem ;
            color:var(--primary-color)
        }
    }
        .informition-me{
            padding-bottom:25px ;
            line-height:29px ;
        }
        .about-info {
            display:flex ;
            .info-title p{
            padding-right:10px ;
            margin:10px 0 ;
            font-weight: 800 ;
            
        }
            .info p{
            padding-left:10px ;
            margin:10px 0 ;    
            }
        }
        @media (max-width:1000px) {
            margin-left:0.2rem ;
            padding-left:0.2rem ;
        h4{
            font-size: 1.3rem;
            span{
            font-size: 1.3rem;
            }
        }
        .about-info {
           
            .info-title p{
            padding-right:5px ;
            margin:10px 0 ;
            font-weight: 800 ;
            
        }
            .info p{
            padding-left:5px ;
            margin:10px 0 ; 
            font-size:17px ;
            }
        }
        
    }

    }



`
export default ImgeSection