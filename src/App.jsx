
import './App.css'
import NavBar from './compoments/NavBar'
import Repere from './compoments/Repere'
import back from './assets/background.png'
import * as motion from "motion/react-client"
import { useState, useEffect } from 'react';
import { variable } from './constante'


function App() {
  const height= window.innerHeight;
  const [width, setWidth] = useState(window.innerWidth);

  console.log('height', height);
  const transition = {
    duration: 2.2,
    delay: 0.5,
    ease: "easeOut",
  }

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  return (
    <div className='h-screen overflow-x-hidden flex  bg-gry-700 w-screen '
        style={{
          scrollbarWidth:"none",
          scrollBehavior:"smooth"
        }}
      >
        <div className='absolute h-[120px] w-screen bg-amber-10'>
          <NavBar/>
        </div>
     
       {/* <Repere/> */}
       <div className='  mt-[200px] bg-green-100 '
        style={{
          // width: width < 950 ? "100%":"100%",
          marginLeft: "80px",
          // marginRight: "80px",
          width:  width < 950 ?`calc(100% - 150px)`: '50%' 
        }}
       >
          <div className='bg-amber-10 w-[883px] h-[275px] p-2.5 pl-0 inline' >
            <span
              style={{
                fontFamily:"Dubai Bold",
                color:variable.primaire,
                // backgroundColor:"red",
                // width:"100%",
                fontSize:86,
                // fontWeight:"bold",
                lineHeight:0.9,
                height:255,
                letterSpacing:-0.32
              }}
            >Choisissez une eau pure. Choisissez Diamco</span>
          </div>
          <div  className='mt-10 bg-amber-300 w-full '
            style={{

            }}
          >
            <span 
              style={{
                fontFamily:"Lato",
                fontSize:27,
                lineHeight:0.9,
                height:120,
                letterSpacing:0,
                backgroundColor:"red",
                width:"100%000..0000000"
              }}
            >
              Découvrez la différence d'une eau véritablement saine. Notre technologie avancée élimine les impuretés pour que vous ne buviez que le meilleur.
            </span>
          </div>
       </div>


        <motion.div className='bg-amber-100 w-[48%] h-screen   bg-no-repeat -z-10 '
        style={{
          backgroundImage: width >=950 ?`url(${back})`: "",
        }}
        initial={{ opacity: 0, x:-100 }}
        animate={{ opacity: 1, x:0 }}
        transition={transition}
      >
      </motion.div>
        
    </div>
  )
}

export default App
