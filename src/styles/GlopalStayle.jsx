import { createGlobalStyle } from "styled-components";
const GlopalStyle = createGlobalStyle`
 /*:root{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --trasparent : #007bff1f
} */
.light-theme{
    --primary-color: #d6943c;
    --primary-color-light: #b67724;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    --border-color: #c9a33b30;
    --background-light-color: #F1F1F1;
    --background-light-color-2: #b88c144c;
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --trasparent : #c08a163c;
}
.dark-theme{
    
    --primary-color: #c98732;
    --primary-color-light: #976018;
    --secondary-color: #6c757d;
    --background-dark-color: #706120;
    --background-dark-grey: #755e10;
    --border-color: #c9a33b30;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --trasparent : #c08a163c;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    
}

body{
    background-color:var(--background-dark-color) ;
    font-family: 'Tajawal', sans-serif;
     color: var(--font-light-color);

}
body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}
a{
    
    font-family: inherit;
    color: var(--font-light-color);
    font-size: inherit;
    font-size: 1rem;
}

span{
    color: var(--primary-color);
}
h6{
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom: .6rem;
}
.dark-light{
  display:flex ;
  align-items:center ;
  position:fixed ;
  right:0px ;
  z-index:110 ;
  top:40px ;
  background-color:var(  --sidebar-dark-color) ;
  padding: 0 10px ;
  .mode-icon{
    margin-top:5px ;
  }
}
.burger-menue{
   
  align-items:center ;
  position:fixed ;
  right:0px ;
  z-index:110 ;
  top:79px ;
  background-color:var(  --sidebar-dark-color) ;
  display: none;

}
@media (max-width:1100px) {
  .burger-menue{
      display: flex;
  }
}
.side-par{
      transform:translateX(0) ;
    }
`

export default GlopalStyle