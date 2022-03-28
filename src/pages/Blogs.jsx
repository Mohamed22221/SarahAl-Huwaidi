
import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import {LayoutCulame, Layouts} from '../styles/Layouts'
import blogs from '../data/BlogData'
const Blogs = () => {
  return (
    <Layouts>
   
    <Title title={'Blogs'} span={'blogs me'} />  
       <LayoutCulame>
  <BlogStyle>
      

    {
    blogs.map((blog) =>{
        return (
            <div className='mainblog' key={blog.id}>
            
                <div className='img-blog'>
                <img src={blog.img} />
            </div>
            <div className='title'>
            <h4>{blog.title}</h4>
            </div>
            <div className='date'>
            <h4>{blog.date}</h4>
            <h4>{blog.month}</h4>

            </div>
            

            </div>

        )
    })
    }
     </BlogStyle>
    </LayoutCulame>
    
  </Layouts>
    
  )
}
const BlogStyle = styled.div`
position:relative ;
z-index:50 ;
display:grid ;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
gap:25px ;

@media (max-width:450px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.mainblog{
background-color:var(--sidebar-dark-color) ;
overflow:hidden ;
position: relative;
border-radius:5px ;
cursor: pointer;

&:hover .img-blog img{
    transform: scale(1.2)rotate(5deg);
    
    overflow: hidden ;
    
}
    .img-blog{
        width:100% ;
        overflow:hidden ;
        
        img{
            width:100% ;
            height:100%;
            transition:0.7s ease-in-out ;
           
        }
    }
    .title{

        h4{
            text-align:center ;
            padding:8px 0 ;

        }
    }
    .date{
        position:absolute ;
        top:20px ;
        left:50px ;
        background-color:white ;
        opacity: 0.7 ;
        color:black ;
        padding:5px 18px ;
        text-align:center ;
        font-weight:bolder ;
        border-bottom:7px solid blue ;
    }
}
    
`
export default Blogs