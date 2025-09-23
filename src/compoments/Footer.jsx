import { Facebook, Twitter, Instagram } from 'lucide-react';

import logoBlanc from "../assets/logoBlanc.png";
import { variable } from '../constante';

const Footer = () => {
  return (
    <footer 
      className="pt-10 pb-6 "
      style={{ backgroundColor: variable.primaire, fontFamily: "Lato" }}
    >
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Haut : Logo + NewsLetter --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center space-x-3 ">
            <img src={logoBlanc} alt='logo' className="h-8 md:h-auto"/>
          </div>

          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">
              Souscrivez à notre Newsletter
            </h3>
            <div className="flex">
              <input 
                type="email"
                placeholder="Votre email"
                className="flex-grow py-2 px-3 bg-transparent border-b border-b-white/30 text-white placeholder-white/60 focus:outline-none"
              />
              <button 
                className="px-4 text-white transition"
                style={{
                  backgroundColor: variable.secondaire, 
                  borderRadius: 0, 
                  borderTopLeftRadius: 5, 
                  borderTopRightRadius: 5
                }}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* --- Ligne de séparation --- */}
        <div className="border-t border-white my-6 "></div>

        {/* --- Bloc Newsletter + Liens --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-10">
          
          {/* Newsletter */}
          {/* <div className='relative md:col-span-1 -mr-14'>
            <h3 className="text-white text-3xl font-semibold mb-4">
              Souscrivez à notre Newsletter
            </h3>
            <div className="flex w-2/3">
              <input 
                type="email"
                placeholder="Email address"
                className="w-[1000px] py-2  bg-transparent border-b border-b-white/30 text-white placeholder-white/60 focus:outline-none"
              />
              <button className="bg-sky-600 px-4 rounded-r-md text-white hover:bg-sky-500 transition"
              style={{backgroundColor: variable.secondaire, borderRadius:0, borderTopLeftRadius:5, borderTopRightRadius:5}}>
                &gt;
              </button>
            </div>
          </div> */}

          {/* Services */}
          <div>
            <h4 className="text-[#D9E4FF] font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" style={{ fontSize: 18, color: variable.white}} className="text-white">Analyse de l’eau</a></li>
              <li><a href="#" style={{ fontSize: 18, color: variable.white}} className="text-white">Purification UV</a></li>
              <li><a href="#" style={{ fontSize: 18, color: variable.white}} className="text-white">Filtration intelligente</a></li>
              <li><a href="#" style={{ fontSize: 18, color: variable.white}} className="text-white">Alimentation Hybride</a></li>
            </ul>
          </div>

          {/* À propos */}
          <div>
            <h4 className="text-[#D9E4FF] font-semibold mb-4">À propos</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" style={{ fontSize: 18, color: variable.white}} className="text-white">À propos de nous</a></li>
              <li><a href="#" style={{ fontSize: 18, color: variable.white}} className="text-white">Témoignages</a></li>
              <li><a href="#" style={{ fontSize: 18, color: variable.white}} className="text-white">Notre équipe</a></li>
              <li><a href="#" style={{ fontSize: 18, color: variable.white}} className="text-white">Contact</a></li>
            </ul>
          </div>

          {/* Aide */}
          <div>
            <h4 className="text-[#D9E4FF] font-semibold mb-4">Aide</h4>
            <ul className="space-y-2 text-white">
              <li><a href="#" style={{ fontSize: 18, color: variable.white}} className="text-white">FAQs</a></li>
              <li><a href="#" style={{ fontSize: 18, color: variable.white}} className="text-white">Contactez nous</a></li>
            </ul>
          </div>
        </div>

        {/* --- Bas : Mentions légales + Réseaux sociaux --- */}
        <div className="flex flex-col md:flex-row justify-between items-center  pt-6">
          <div className="flex space-x-6 text-sm text-white/60">
            <a to="#" style={{ fontSize: 15, color: variable.white}} className="text-white">Termes & Conditions</a>
            <a href="#" style={{ fontSize: 15, color: variable.white}} className="text-white">Politique de confidentialité</a>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" style={{ fontSize: 18, color: variable.white}} className="text-white hover:text-sky-400"><Facebook size={20} /></a>
            <a href="#" style={{ fontSize: 18, color: variable.white}} className="text-white hover:text-sky-400"><Twitter size={20} /></a>
            <a href="#" style={{ fontSize: 18, color: variable.white}} className="text-white hover:text-sky-400"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;