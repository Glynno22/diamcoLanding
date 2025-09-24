import { useState, useEffect } from 'react';
import * as motion from "motion/react-client"

import agl from './assets/agl.png'
import back from './assets/background.png'
import back2 from './assets/background2.png'
import back3 from './assets/background3.png'
import back4 from './assets/background4.png'
import bio from './assets/bio.png'
import btp from './assets/btp.png'
import eau from './assets/eau.png'
import Group from './assets/Group.png'
import odc from './assets/ODC.png'
import orange from './assets/orange.png'
import unicef from './assets/unicef.png'
import AProposDeNous from './compoments/AProposDeNous';
import CommentCaMarche from './compoments/CommentCaMarche';
import ContactSection from './compoments/ContactSection';
import Footer from './compoments/Footer';
import NavBar from './compoments/NavBar'
import Nouveau from './compoments/Nouveau';
import PourquoiDiamco from './compoments/PourquoiDiamco';
import NotreSolution from './compoments/Solution';
import { variable } from './constante'

import './App.css'

function App() {
  const height = window.innerHeight;
  const [width, setWidth] = useState(window.innerWidth);

  // === Tableau des images pour le carrousel ===
  const images = [back, back2, back3, back4];
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log('height', height);
  const transition = {
    duration: 1,
    delay: 0.3,
    ease: "easeOut",
  }

  // Auto-changement d'image toutes les 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* Section principale */}
      <div className="bg-white flex min-h-screen w-full">
        {/* NavBar fixe */}
        <div className='absolute top-0 left-0 right-0  bg-amber-10 z-10'>
          <NavBar/>
        </div>

        {/* Contenu principal */}
        <motion.div 
          className='bg-green-10 flex-1 pt-[80px]'
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          style={{
            paddingLeft: width >= 950 ? "80px" : "20px",
            paddingRight: "20px",
            height: "100vh",
            flexDirection: "column",
            justifyContent: "center",
            display: "flex",
            maxWidth: width >= 950 ? "50%" : "100%"
          }}
        >
          <div className='p-2.5 pl-0'>
            <span
              style={{
                fontFamily: "Dubai Bold",
                color: variable.primaire,
                fontSize: width >= 950 ? 86 : 48,
                lineHeight: 0.9,
                letterSpacing: -0.32,
                display: "block"
              }}
            >
              Choisissez une eau pure, choisissez Diamco.
            </span>
          </div>

          <div className='mt-10 w-full'>
            <span
              style={{
                textAlign: "justify",
                fontFamily: "Lato",
                fontSize: width >= 950 ? 27 : 18,
                lineHeight: 0.9,
                letterSpacing: 0,
                color: "#0E3643",
                display: "block"
              }}
            >
              Découvrez l'expérience d'une eau véritablement saine. Notre technologie avancée élimine les impuretés
              pour que vous ne buviez que le meilleur.
            </span>
          </div>

          <div className='mt-5 w-full flex flex-col sm:flex-row items-start sm:items-center gap-4'>
            <button 
              className='px-6 py-3 text-white rounded-full'
              style={{ backgroundColor: variable.secondaire }}
            >
              Commandez un dispositif
            </button>
            <button 
              className='px-6 py-3 border rounded-full flex items-center gap-2'
              style={{
                backgroundColor: "white",
                borderColor: variable.secondaire, 
                color: variable.secondaire
              }}
            >
              {/* <img src={Group} alt="" />  */}
              <span>Visionnez une demo</span>
            </button>
          </div>

          <div className='mt-5'>
            <a 
              href="" 
              style={{
                scrollBehavior: "smooth", 
                textDecoration: "underline", 
                color: variable.secondaire 
              }}
            >
              Decouvrez la solution
            </a>
          </div>

          <div className='mt-5 bg-white'>
            <div className=' flex flex-col sm:flex-row justify-start items-center gap-4 '>
              <div className=''>
                <p style={{ color: variable.primaire }}>Avec le soutien de</p>
              </div>
              <div className='flex flex-wrap items-center gap-2'>
                <img src={orange} alt="" className="h-8" />
                {/* <img src={eau} alt="" className="h-8" /> */}
                <img src={unicef} alt="" className="h-8" />
                {/* <img src={bio} alt="" className="h-8" /> */}
                <img src={odc} alt="" className="h-8" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image de fond - uniquement sur desktop */}
        {width >= 950 && (
          <motion.div 
            key={currentIndex} // permet l’animation quand l’image change
            className='flex-1 h-screen bg-no-repeat bg-cover'
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
              maxWidth: "50%"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </div>

      {/* Contenu additionnel - maintenant dans le flux normal */}
      <div className="w-full">
        <section id="solution">
          <NotreSolution />
        </section>

        <section id="pourquoi">
          <PourquoiDiamco/>
        </section>

        <section id="marche">
          <CommentCaMarche />
        </section>

        <section id="propos">
          <AProposDeNous />
        </section>

        <section id="nouveau">
          <Nouveau/>
        </section>

        <section id="contact">
          <ContactSection/>
        </section>

        <Footer/>
      </div>

    </div>
  )
}

export default App