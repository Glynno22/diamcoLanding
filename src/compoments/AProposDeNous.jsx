import * as motion from "motion/react-client";

import proposTof from '../assets/proposTof.png';
import { variable } from "../constante";

const AProposDeNous = () => {
  return (
    <section 
      className="py-20 "
      style={{ backgroundColor: variable.primaire, fontFamily: "Lato" }}
    >
      <div className="max-w-[95%] md:max-w-[88%] lg:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre */}
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-32 "
          style={{ fontFamily: "Dubai Bold", fontSize:60 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          A Propos De Diamco
        </motion.h2>

        {/* Section Notre Histoire */}
        <motion.div 
          className="mb-20 relative mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex justtify-center items-center  m-0 p-0">
           <hr className="border-1 w-[53%] absolute -top-12 -left-100" />
            <h3 className="absolute left-[28.5%] -top-16 text-2xl md:text-3xl font-bold text-white mb-6 text-center ">
                Notre histoire
            </h3>
          </div>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed text-justify">
            Diamco est né de la conviction que chacun mérite un accès à l'eau pure. Fondée par des experts en 
            technologies de l'eau, notre entreprise s'est donnée pour mission de développer des solutions innovantes 
            et accessibles pour purifier l'eau dans les communautés rurales et urbaines d'Afrique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:flex gap-8 items-center ">
          
          {/* Image avec légende */}
          <motion.div
            className="space-y-8    lg:w-[40%] "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src={proposTof}
                alt="Communautés rurales utilisant les solutions Diamco"
                className="w-full rounded-2xl "
              />
            </div>
          </motion.div>

          {/* Contenu textuel */}
          <motion.div 
            className="space-y-8 xs:w-full  lg:w-8/12 "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Communautés rurales.
              </h3>
              <p className="text-lg md:text-xl text-white leading-relaxed mb-6 text-justify">
                En constatant les maladies et les défis quotidiens liés à l'eau insalubre, notre équipe d'ingénieurs et d'experts a 
                décidé d'agir. Nous avons passé des années à concevoir et à perfectionner un système qui allie technologie de pointe, 
                autonomie et durabilité. Aujourd'hui, Diamco est le fruit de cette vision : une solution concrète pour un avenir plus sain.
              </p>
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AProposDeNous;