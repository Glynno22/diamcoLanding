import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { variable } from "../constante";

const faqs = [
  {
    question: "Comment puis-je obtenir un dispositif Diamco ?",
    answer:
      "C’est simple ! En commandant un dispositif de purification d’eau intelligente via notre application mobile Diamco. Notre plateforme vous permet de rejoindre une communauté qui s’associe pour commander et bénéficier du dispositif.",
  },
  {
    question: "Combien coûte un dispositif Diamco ?",
    answer:
      "Le prix varie entre 500 000 et 1 000 000 XAF, en fonction du modèle et des fonctionnalités choisies. Nous proposons également des options flexibles pour les particulier propriétaire de forage ou pas.",
  },
  {
    question: "En quoi Diamco est-il différent des filtres classiques ?",
    answer:
      "Contrairement aux filtres traditionnels qui se limitent à retenir les impuretés, Diamco va plus loin : il filtre, désinfecte (élimine les bactéries), analyse la qualité de l’eau et offre une visualisation en temps réel via l’application mobile. De plus, notre support client reste disponible avec la possibilité d’envoyer des alertes.",
  },
  {
    question: "Est-ce facile à utiliser ?",
    answer:
      "Absolument ! Diamco est conçu pour être simple d’installation et d’utilisation. L’application mobile vous guide pas à pas et vous donne accès à toutes les données en un seul clic.",
  },
  {
    question: "Puis-je l’utiliser en zone rurale ?",
    answer:
      "Oui, Diamco est spécialement pensé pour les communautés rurales et les zones à accès limité à l’eau potable. C’est une solution robuste et fiable adaptée à ces environnements.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[95%] md:max-w-[88%] lg:max-w-[80%] ">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto text-center"
        >
          <h2
            style={{
              color: variable.primaire,
              fontFamily: "Dubai bold",
              fontSize: 60,
            }}
            className="text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl"
          >
            Questions fréquentes ?
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
              style={{ backgroundColor: variable.primaire }}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                style={{ backgroundColor: variable.primaire }}
                className="flex items-center justify-between text-start w-full px-6 py-5 sm:py-6 focus:outline-none"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ rotate: openIndex === index ? 0 : -180 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              {/* Réponse animée */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 py-5 sm:pb-6 ml-10"
                  >
                    <p className="text-white">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-base mt-9"
        >
          Vous avez toujours des questions ?{" "}
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary underline">
            <a href="#contact">Contactez notre support</a>
          </span>
        </motion.p>
      </div>
    </section>
  );
}