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