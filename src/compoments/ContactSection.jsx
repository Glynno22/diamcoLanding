import React from "react";
import { motion } from "framer-motion";

import { variable } from "../constante";

export default function ContactSection() {
  return (
    <section className="relative bg-[#FAFBFC] overflow-hidden">
      {/* Formes décoratives */}
      <motion.div 
        className="absolute bottom-0 left-0 w-40 h-20 bg-cyan-200 rounded-t-full z-10 opacity-60"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute bottom-0 left-20 w-[95%] h-30 z-1"
        style={{ backgroundColor: variable.primaire }}
      ></div>

      {/* Contenu */}
      <div className="relative max-w-6xl mx-auto px-8 py-20 grid md:flex gap-30 items-center top-15" style={{ fontFamily: "Lato" }}>
        
        {/* Texte gauche */}
        <motion.div 
          className="md:w-[40%]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl font-bold text-cyan-900 mb-4"
            style={{ fontFamily: "Dubai bold", fontSize: 60 }}
          >
            Contactez nous
          </h2>
          <motion.p 
            className="text-gray-700 leading-relaxed"
            style={{ fontSize: 20 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Que vous souhaitiez en savoir plus sur notre solution, planifier une
            démonstration ou discuter d&apos;un partenariat, notre équipe est prête
            à vous accompagner.
          </motion.p>
        </motion.div>

        {/* Formulaire droite */}
        <motion.div 
          className="relative md:w-[50%]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Décorations */}
          <motion.div
            className="absolute top-10 -right-10 w-22 h-30 bg-cyan-200 rounded-br-full rounded-tr-full opacity-60"
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>

          <div
            className="absolute -bottom-1.5 -left-1.5 w-32 h-32 rounded-full opacity-60 z-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(0,0,0,1) 0px, rgba(0,0,0,0) 2px, transparent 2px, transparent 6px)",
              backgroundColor: "#ffffff",
            }}
          ></div>
          <div
            className="absolute top-10 h-40 w-10 opacity-60 z-0 -left-2.5"
            style={{
              backgroundImage:
                "radial-gradient(rgba(199,248,254,1) 2px, transparent 2px)",
              backgroundSize: "10px 10px",
            }}
          ></div>

          {/* Formulaire */}
          <motion.div 
            className="bg-white shadow-lg rounded-2xl p-8 relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              {/* Nom + Prénom */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    placeholder="entrez votre nom"
                    className="w-full border border-gray-300 placeholder:text-black/50 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prenom
                  </label>
                  <input
                    type="text"
                    placeholder="entrez votre prenom"
                    className="w-full border border-gray-300 placeholder:text-black/50 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="entrez votre email address"
                  className="w-full border border-gray-300 placeholder:text-black/50 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Ville + Téléphone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ville
                  </label>
                  <input
                    type="text"
                    placeholder="entrez votre ville"
                    className="w-full border border-gray-300 placeholder:text-black/50 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="entrez votre numero"
                    className="w-full border border-gray-300 placeholder:text-black/50 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Entrez votre message"
                  className="w-full border border-gray-300 placeholder:text-black/50 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
              </div>

              {/* Bouton */}
              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-500 text-white px-5 py-3 rounded-4xl font-medium hover:bg-cyan-600 transition text-center"
                  style={{
                    backgroundColor: variable.secondaire,
                    borderRadius: 30,
                    paddingLeft: 30,
                    paddingRight: 30,
                  }}
                >
                  Envoyer
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}