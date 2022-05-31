
import  Button  from '../components/Button'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import {LayoutCulame, Layouts} from '../styles/Layouts'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const [Values , setValues] = useState({
        FirstName : "" ,
        Email :"",
        subject :"",
        Message:""
    })
   
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jxun6ji', 'template_4mni53h', form.current, '_gMMwNlImuaHyLxGu')
        .then((response) => {
            console.log(response);
            
         }, (err) => {
            console.log('FAILED...', err);
         })
       
        }

  return (
    <Layouts>
    <Title title={'Contact'} span={'Contact me'} />  
       <LayoutCulame>
  <ContactStyle>
      <div className='left-contact'>
          <h4>Get in Touch</h4>
          <form ref={form}>
              <div className='item-contact'>
                <label>Enter Your Name*</label>
                <input type="text" value={Values.FirstName} onChange={(e) =>setValues({...Values , FirstName:e.target.value})} name="FirstName"/>
              </div>
              <div className='item-contact'>
                <label>Enter Your Email*</label>
                <input type="email" value={Values.Email} onChange={(e) =>setValues({...Values , Email:e.target.value})} name="Email" />
              </div>
              <div className='item-contact'>
                <label>Enter Your subject*</label>
                <input type="text" value={Values.subject} onChange={(e) =>setValues({...Values , subject:e.target.value})} name="subject"/>
              </div>
              <div className='item-contact'>
                <label>Enter Your Message*</label>
                <textarea value={Values.Message} onChange={(e) =>setValues({...Values , Message:e.target.value})} name="Message"   />
              </div>
          </form>
          <Button title="Send Mail" sendEmail={sendEmail}/>
      </div>
      <div className='right-content'>
          <div className='item-right'>
            <PhoneIcon className='icon-contact' />
            <div className='content-contact'>
                <p>
                    Phone
                    <a href='tel:0096596696637'>0096596696637</a>
                </p>
                
            </div>
          </div>
          <div className='item-right'>
            <EmailIcon className='icon-contact' />
            <div className='content-contact' >
                <p>
                Email
                    <a href='mailto:s1alhuwaidi@gmail.com'>s1alhuwaidi@gmail.com</a>
                </p>
                
            </div>
          </div>
          <div className='item-right'>
            <AddLocationIcon className='icon-contact' />
            <div className='content-contact'>
                <p>
                Address
                    <a href='https://goo.gl/maps/Bt1XoxQGqtDhYQcE7' target="_blank">الكويت محافظه الاحمدي</a>
                </p>
                
            </div>
          </div>
      </div>
  </ContactStyle>
    </LayoutCulame>
    
  </Layouts>
  )
}
const ContactStyle = styled.div`
    position:relative ;
    z-index:50 ;
    display:grid ;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width:800px) {
        grid-template-columns: repeat(1, 1fr); 
    }
    //left Contact
    .left-contact{
        h4{
            color:var(--white-color) ;
            padding-bottom:20px ;
            font-weight:900 ;
            font-size:24px ;
        }
      .item-contact{
       display:flex;
       flex-direction: column ;
       width: 80% ;
       padding:15px 0 ;
       position:relative ;
       @media (max-width:1100px) {
             width:95%
                
        }
       label{
           position:absolute ;
           font-size:13px ;
           padding:2px 8px ;
           top:4px ;
           left:9px ;
           background-color:var(--background-dark-color) ;

       }
       input , textarea{
        background-color:transparent ;
        border:2px solid var(--border-color) ;
        padding:4px 0 ;
       }
    }
    }
    //right Contact
    .right-content{

        }
        .item-right{
            display: flex;
            align-items:center ;
            width:100% ;
            background-color:var(--sidebar-dark-color) ;
            padding:15px 20px ;
            margin:18px 0 ;
            @media (max-width:1100px) {
                padding:15px 10px ;
                
        }
        }
        .icon-contact{
            border: 1px solid var(--border-color);
            font-size:80px ;
            padding:20px ;
            margin-right: 20px;
            text-align: center;

            
        }
        .content-contact{
            
            p{
               
                display:flex ;
                flex-direction:column ;
                color:var(--white-color) ;
                a{
                    color: var(--font-light-color);
                }
                a:hover{
                    color:var(--primary-color) ;
                }
                @media (max-width:1100px) {
               font-size:18px;
               a{
                font-size:16px;
               }
        }
            }
        }
    

`
export default Contact