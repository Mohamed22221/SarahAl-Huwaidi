import styled from "styled-components";
import {  Routes,Route} from "react-router-dom";
import SideBar from './components/SideBar';
import Home from "./pages/Home";
import About from "./pages/About";
import Lines from "./components/Lines";
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
function App() {
  
  //start take action mode view
  const [theme , setTheme] = useState("light-theme")
  useEffect(()=>{
    document.documentElement.className = theme
  },[theme])
  const HandelColor =()=>{
    if(theme === "light-theme"){
      setTheme("dark-theme")
    }else{
      setTheme("light-theme")
    }
   
  }
  //start take action side par Menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const close =() => setClick(false)
  return (
    <StyleApp>
      {/*start dark and light mode */}
      <div className="dark-light">
        <div className="left-mode">
          <LightModeIcon className="mode-icon"/>
        </div>
        <div className="right-mode">
        <Switch onClick={HandelColor}
        />
      </div>

      </div>
      {/*end dark and light mode */} 
       <SideBar click={click} close={close} />
       <div className="burger-menue"><Button onClick={handleClick}><MenuIcon/></Button></div>
       <div className="content">
        <Lines />
     <Routes>
      

     <Route path="/" element={ <Home />} /> 
       <Route path="/Mohamed" element={ <Home />} /> 
       <Route path="/about" element={ <About />} />
       <Route path="/blogs" element={ <Blogs/>} />
       <Route path="/contact" element={ <Contact/>} /> 
       <Route path="/resume" element={ <Resume/>} /> 
       <Route path="/portfolio" element={ <Portfolio/>} />
       
        
     </Routes>
       </div>
    </StyleApp>
  );
}

const StyleApp = styled.div`
background-color: var(--background-dark-color);
.content{
  position: relative;
  margin-left: 300px;
  height: 100vh;
  @media (max-width:1100px) {
      margin:0;
    }
 
}
`;
export default App;
