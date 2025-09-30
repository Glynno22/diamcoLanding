import React from 'react';
import { motion } from 'framer-motion';

import dispo from '../assets/dispo.png';
import etape1 from '../assets/etape1.png';
import etape2 from '../assets/etape2.png';
import etape3 from '../assets/etape3.png';
import etape4 from '../assets/etape4.png';
import { variable } from '../constante';

const CommentCaMarche = () => {
  return (
    <section
      className="py-20 pb-20 bg-white font-sans overflow-hidden"
      style={{ margin: 0, padding: 0 }}
    >
      <div className="px-4 sm:px-6 lg:px-8 m-0 md:mb-20" style={{  padding: 0 }}>
        {/* Titre principal */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-6xl font-bold mb-22"
          style={{ fontFamily: 'Dubai bold', color: variable.primaire }}
        >
          Comment Ça Marche ?
        </motion.h2>

        {/* Conteneur principal */}
        <div className="relative flex flex-col lg:flex-row lg:items-start a" style={{ margin: 0, padding: 0 }}>
          {/* Section droite - Dispositif (sur mobile affiché en premier) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 lg:absolute lg:top-[20%] lg:right-[8%] lg:w-1/4 w-full flex flex-col justify-center mb-10 lg:mb-0 z-20"
          >
            <div className="bg-gray-100 rounded-lg shadow-lg mx-auto lg:-ml-20" style={{  }}>
              {/* Image du dispositif */}
              <div className="mb-8 flex justify-center">
                <img
                  src={dispo}
                  alt="Dispositif de purification d'eau"
                  className=""
                />
              </div>

              {/* Mode Opératoire */}
              <div className="px-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Mode Opératoire</h3>
                <p
                  style={{ fontFamily: 'Lato', fontSize: 13.5 }}
                  className="text-gray-700 leading-relaxed mb-5"
                >
                  De la filtration à la désinfection, notre système garantit que
                  l'eau que vous consommez est d'une qualité irréprochable.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section gauche - Étapes */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative rounded-lg overflow-hidden w-full lg:w-[70%]"
            style={{ backgroundColor: variable.secondaire, margin: 0, padding: 0 }}
          >
            <div className="p-12 pr-8">
              {/* Ligne 1 - Étapes 01 et 02 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-[75%] mx-auto">
                {/* Étape 01 */}
                <div className="text-center text-white">
                  <div className="mb-3 flex justify-center">
                    <img src={etape1} alt="" className="w-35" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Entrée de L'eau</h3>
                  <p
                    style={{ fontFamily: 'Lato', fontSize: 13.5 }}
                    className="text-sm leading-relaxed text-justify"
                  >
                    Le processus de purification commence par l'aspiration de
                    l'eau brute. Un tuyau d'entrée immergé dans la source
                    achemine l'eau directement vers l'unité de filtration du
                    dispositif Diamco.
                  </p>
                </div>

                {/* Étape 02 */}
                <div className="text-center text-white">
                  <div className="mb-3 flex justify-center">
                    <img src={etape2} alt="" className="w-35" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Analyse et filtration</h3>
                  <p
                    style={{ fontFamily: 'Lato', fontSize: 13.5 }}
                    className="text-sm leading-relaxed text-justify"
                  >
                    Une fois captée, l'eau est analysée entre dans le cœur du
                    dispositif Diamco pour être traitée. Elle passe d'abord par
                    plusieurs systèmes de filtration qui éliminent les débris,
                    les sédiments et les particules fines successivement.
                  </p>
                </div>
              </div>

              {/* Ligne 2 - Étapes 03 et 04 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-[75%] mx-auto mt-12">
                {/* Étape 03 */}
                <div className="text-center text-white">
                  <div className="mb-3 flex justify-center">
                    <img src={etape3} alt="" className="w-35" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Purification et désinfection de l'eau
                  </h3>
                  <p
                    style={{ fontFamily: 'Lato', fontSize: 13.5 }}
                    className="text-sm leading-relaxed text-justify"
                  >
                    Une fois filtrée, l'eau pénètre dans l'unité de purification.
                    Elle est exposée à une forte dose de lumière ultraviolette
                    (UV).
                  </p>
                </div>

                {/* Étape 04 */}
                <div className="text-center text-white">
                  <div className="mb-3 flex justify-center">
                    <img src={etape4} alt="" className="w-35" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Seconde analyse de l'eau à la sortie
                  </h3>
                  <p
                    style={{ fontFamily: 'Lato', fontSize: 13.5 }}
                    className="text-sm leading-relaxed text-justify"
                  >
                    Avant d'être distribuée, l'eau purifiée subit une seconde
                    analyse. Des capteurs post-traitement vérifient à nouveau sa
                    qualité, confirmant la réussite de la purification.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommentCaMarche;