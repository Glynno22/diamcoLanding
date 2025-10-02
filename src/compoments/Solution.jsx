import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";

import analyseDiamco1 from '../assets/analyseDiamco1.png';
import filtraDiamco2 from '../assets/filtraDiamco.png';
import hybrideDiamco from '../assets/hybrideDiamco.png';
import prufDiamco3 from '../assets/prufDiamco.png';
import Vector from '../assets/Vector.svg';
import VectorFilt from '../assets/VectorFilt.svg';
import Vectorhyb from '../assets/Vectorhyb.svg';
import VectorPurif from '../assets/VectorPurif.svg';
import VectorSavoir from '../assets/VectorSavoir.svg';
import { variable } from '../constante';

const NotreSolution = () => {
  // Slides configurables 👇
  const slides = [
    {
      title: "Analyse de l'eau",
      subtitle: "Diamco intègre un système d'analyse intelligent",
      description:
        "Diamco analyse les paramètres de l’eau en entrée et en sorties de chaque dispositif afin d’établir une base de donnée riche en qualité de l’eau.",
      image: analyseDiamco1,
      buttonText: "Sur l'analyse de l'eau",
      imageIcon: VectorSavoir,
      features: [
        "Mesure de la turbidité",
        "Détection de la présence de bactéries",
        "Mesure du pH",
        "Mesure des Solides Totaux Dissous (TDS)",
        "Mesure de la conductivité électrique",
      ],
    },
    {
      title: "Filtration intelligente",
      subtitle: "Le dispositif Diamco est équipé d'un système de filtration en plusieurs étapes",
      description:
        "Notre système analyse et ajuste automatiquement en fonction de la qualité de l'eau, tous ses paramètres de potabilités.",
      image: filtraDiamco2,
      buttonText: "Sur la filtration intelligente",
      imageIcon: VectorFilt,
      features: [
        "Filtre à mailles fines",
        "Filtre à GAP",
        "Filtre à charbon actif",
        "Microfiltration",
      ],
    },
    {
      title: "Purification UV",
      subtitle: "Le cœur du système Diamco réside dans son unité de purification par ultraviolets (UV)",
      description:
        "Grâce à sa technologie UV, Diamco élimine les menaces invisibles et garantissant que chaque goutte consommée est sûre et saine.",
      image: prufDiamco3,
      buttonText: "Sur la purificatio UV ",
      imageIcon: VectorPurif,
      features: [
        "Désinfection sans produits chimiques",
        "Gestion intelligente de l'énergie",
        "Faible coût de maintenance",
        "Sécurité et efficacité",
        "Procédé instantané",
      ],
    },
    {
      title: "Alimentation Hybride",
      subtitle: "Le dispositif Diamco est conçu pour une autonomie totale",
      description:
        "Sa principale source d'énergie est l'alimentation solaire, captée par des panneaux photovoltaïques intégrés. Mais il est aussi alimente par les réseaux d'alimentations électriques lors des décharges de batteries.",
      image: hybrideDiamco,
      buttonText: "Sur l’alimentation hybride",
      imageIcon: Vectorhyb,
      features: [
        "Alimentation solaire",
        "Gestion intelligente de l'énergie",
        "Batterie electrique Backup",
      ],
    },
  ];

  // State du slide actif
  const [current, setCurrent] = useState(0);

  // Auto défilement toutes les 10s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Fonction navigation
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[current]; // Slide actif

  return (
    <section
      className="min-h-screen py-20 "
      style={{ backgroundColor: variable.primaire }}
    >
      <div className="max-w-[95%] md:max-w-[88%] lg:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <motion.h2
          className="text-center text-4xl md:text-5xl font-bold mb-16"
          style={{ fontFamily: "Dubai Bold", color: variable.white }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Notre Solution
        </motion.h2>

        {/* Conteneur principal */}
        <div className="flex flex-col lg:flex-row justify-center rounded-lg gap-12">
          {/* Bloc image */}
          <motion.div
            key={slide.image}
            className="lg:w-4/12 w-4/12 sm:left-[35%] md:left-[35%] lg:left-0 relative hidden md:block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full rounded-xl shadow-xl"
              />

              {/* Bouton superposé */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#008BBB] px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 cursor-pointer md:w-70"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={slide.imageIcon} alt="" className="w-10 " />
                <span>
                  <span className="text-white text-lg font-semibold">
                    En savoir plus
                  </span>
                  <br />
                  <span className="text-white font-semibold text-sm">
                    {slide.buttonText}
                  </span>
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bloc texte */}
          <motion.div
            key={slide.title}
            className="lg:w-5/12 w-full space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="text-lg mb-10"
              style={{ fontFamily: "Lato", color: variable.white }}
            >
              Nos solutions
            </span>

            <h3 className="text-3xl md:text-4xl font-bold text-white">
              {slide.title}
            </h3>

            <p
              className="text-xl md:text-2xl"
              style={{ color: variable.lightBlue }}
            >
              {slide.subtitle}
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed text-justify">
              {slide.description}
            </p>

            {/* Liste */}
            <ul className="space-y-4">
              {slide.features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 text-white text-base md:text-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img src={Vector} alt="" className="w-5 h-5 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Bouton mobile 👇 */}
            <div className="block md:hidden mt-8 lg:">
              <motion.div
                className="bg-[#008BBB] px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 cursor-pointer justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={slide.imageIcon} alt="" className="w-10" />
                <p>
                  <span className="text-white text-lg font-semibold">
                    En savoir plus
                  </span>
                  <br />
                  <span className="text-white font-semibold text-sm">
                    {slide.buttonText}
                  </span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Navigation flèches */}
        <div className="lg:relative lg:bottom-92 flex justify-center gap-8 mt-16">
          <motion.button
            onClick={prevSlide}
            className="p-3 rounded-full hover:bg-white/10 transition-colors duration-200 lg:absolute lg:left-0"
            style={{ backgroundColor: "transparent", color: variable.secondaire }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="p-3 rounded-full hover:bg-white/10 transition-colors duration-200 lg:absolute lg:right-0"
            style={{ backgroundColor: "transparent", color: variable.secondaire }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default NotreSolution;