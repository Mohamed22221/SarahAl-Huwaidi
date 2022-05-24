import React from 'react'
import Particles from "react-tsparticles";


const Particless = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles width="80%" height="100vh" 
    params={{
      particles: {
        number:{
          value:109,
          density:{
            enable: true,
            value_area: 1200
          }
        },
        color:{
          value: '#636e72'
        },
        shape:{
          type: 'circle',
          stroke: {
            width: 3
          },
          polygon:{
            nb_sides: 25
          }
        },
        line_linked: {
          enable: false,
          distance: 150,
          opacity: 0.9,
          width: 2,
          shadow: {
            enable: true,
            color: "#e74c3c",
            blur: 5
          }
        },
        move:{
          enable: true,
          random: true,
          speed: .6,
          attract:{
            rotateX: 600,
            rotateY: 1200
          }
        },
        size: {
          value: 4,
          random: true,
          anim:{
            speed: 40,
            size_min: 0.1
          }
        },
        opacity: {
          value: 0.8,
          anim: {
            speed: 1,
            opacity_min: 0.1
          }
        }
      }
    }}
/>

  )
}

export default Particless