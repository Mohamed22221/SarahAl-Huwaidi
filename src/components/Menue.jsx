import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { LayoutCulame } from '../styles/Layouts'
const Menue = ({menueItem}) => {
  return (
    
      <LayoutCulame>
        <MenueStyle>
        {
            menueItem.map((item) =>{
                return (
                 
                    <div className='main-item' key={item.id}>
                      <div className='item-portfolio'>
                        <div className='portfolio-img'>
                          <img src={item.image} />
                          <ul>
                            <li>
                              <a href={item.link2} target="_blank"><GitHubIcon className='icon-portfolio'/></a>
                            </li>
                            <li>
                              <a href={item.link1} target="_blank"><LinkIcon  className='icon-portfolio'/></a>
                            </li>
                          </ul>
                        </div>
                        <h6>{item.title}</h6>
                        <p>{item.text}</p>
                      </div>
                    </div>
                 
                )
            })
        }</MenueStyle>
      </LayoutCulame>
    
  )
}
const MenueStyle = styled.div`

    display:grid ;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
    gap:80px 40px;

  .item-portfolio{
    background-color: var(--sidebar-dark-color) ;
    border-radius:5px ;
    p{
      font-size:16px ;
      
      padding:5px 10px  ;
    }
    h6{
      font-size:22px ;
      padding-bottom:8px ;
      padding:5px 10px ;
      color:var(--white-color) ;
    }
  
    .portfolio-img {
      border-radius:5px ;
      position:relative ;
      
      &::before{
        content:"";
        position:absolute ;
        top:10px ;
        right:15px;
        background-color:white ;
        opacity:0.9 ;
        width:calc(100% - 30px) ;
        margin:0 auto ;
        height:calc(100% - 30px) ;
        transform-origin:0 ;
       transform:scaleX(0);
       transition: all 0.5s ease-in-out ;
       background-color: #191D2B ;
      }
      &:hover{
        &::before{
        transform: scaleX(1);
      }
      ul{
         display:flex ;
         position:absolute ;
          top:40% ;
          left:50% ;
          transform:translateX(-50%) ;
         z-index:5 ;
         

        .icon-portfolio{
          padding: 5px 5px;
          font-size: 40px;
          margin: 0 8px;
          border: 2px solid var(--primary-color);
          border-radius: 50%;
          color :var(--primary-color)
        }
       }
      }
      img{
        width:100% ;
        border-radius:5px 5px 0px 0px  ;
      }
      ul{
        display:none ;
      

      } 
    }
  }

`
export default Menue