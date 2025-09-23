import React from 'react';
import * as motion from "motion/react-client";

import AppStore from '../assets/app.png';
import Nouveaux from '../assets/nouveaux.png';
import PlayStore from '../assets/play.png';
import { variable } from '../constante';

const Nouveau = () => {
  return (
    <section 
      className="py-20 mt-20"
      style={{ backgroundColor: variable.white, fontFamily: "Lato" }}
    >
      <div className="max-w-[95%] md:max-w-[88%] lg:max-w-[80%]  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:flex">
          
          {/* --- Image --- */}
          <motion.div
            className="flex justify-center lg:justify-start lg:w-[58%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src={Nouveaux} 
              alt="Application Diamco - suivi en temps réel" 
              className=" w-auto "
            />
          </motion.div>

          {/* --- Texte --- */}
          <motion.div
            className=" lg:w-[42%]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p 
              className="text-lg mb-3"
              style={{ color: variable.secondaire }}
            >
              Nouveau
            </p>

            <h3 
              className="text-3xl md:text-4xl font-bold leading-snug mb-6"
              style={{ color: variable.primaire, fontFamily: "Dubai Bold" }}
            >
              Surveillez la qualité de votre eau en temps réel
            </h3>

            <p 
              className="text-base md:text-lg leading-relaxed mb-6 text-black"
              style={{ fontFamily: "Lato" }}
            >
              Notre application mobile est conçue pour vous donner le contrôle total sur votre eau potable. 
              Elle vous permet de suivre la qualité de l'eau en temps réel, de vérifier le bon fonctionnement 
              du dispositif et de recevoir des alertes pour la maintenance.
            </p>

            {/* Boutons Store */}
            <div className="flex space-x-4">
              <a href="#">
                <img 
                  src={AppStore} 
                  alt="Télécharger sur l'App Store" 
                  className="h-12 md:h-14"
                />
              </a>
              <a href="#">
                <img 
                  src={PlayStore} 
                  alt="Disponible sur Google Play" 
                  className="h-12 md:h-14"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Nouveau;