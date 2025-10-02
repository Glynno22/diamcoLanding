import React from "react";
import { motion } from "framer-motion";

import Desire from '../assets/desire.png'
import Donald from '../assets/donald.png'
import franck from '../assets/franck.png'
import Kely from '../assets/kely.png'
import marc from '../assets/marc.png'
import marius from '../assets/marius.png'
import { variable } from "../constante";

// Exemple de membres
const members = [
  {
    name: "NDUNG DESIRE WAJIRI",
    role: "Le Porteur de Projet",
    desc: "Il définit la vision du projet, priorise les fonctionnalités, et assure la liaison entre les besoins du marché/clients et l’équipe technique.",
    image: Desire,
  },
  {
    name: "PEYIANI WOMFO KELY",
    role: "La Designeuse",
    desc: "Elle donne forme à la vision, est garante de l'esthétique, de l'expérience utilisateur (UX) et de l'interface utilisateur (UI).",
    image: Kely,
  },
  {
    name: "MARIUS TAWE",
    role: "Le Data Analyst",
    desc: "Il collecte, traite et analyse les données pour en extraire des informations précieuses.",
    image: marius,
  },
  {
    name: "TANKEU MBAPTE FRANCK",
    role: "L'Expert IoT",
    desc: "Il conçoit, développe et gère les systèmes connectés permettant aux objets de collecter et d’échanger des données.",
    image: franck,
  },
  {
    name: "FONKOU KOUYATE MARC JORDAN",
    role: "Le Développeur Mobile",
    desc: "Il crée des applications performantes et intuitives pour iOS et Android.",
    image: marc,
  },
  {
    name: "GLYNN DONALD BODIE NNOUKIMI",
    role: "Le Développeur Web",
    desc: "Il bâtit l’univers digital en créant et maintenant des applications et sites web.",
    image: Donald,
  },
];

export default function TeamGrid() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wide text-gray-500">L'équipe</p>
          <h2
            style={{ color: variable.primaire, fontFamily: "Dubai bold" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold"
          >
            Notre <span style={{ color: variable.secondaire }}>équipe</span>
          </h2>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {members.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3
                  style={{ color: variable.primaire }}
                  className="text-lg font-bold"
                >
                  {member.name}
                </h3>
                <p
                  style={{ color: variable.secondaire }}
                  className="text-sm font-semibold mb-2"
                >
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.desc}</p>

                {/* Réseaux sociaux (exemple placeholders) */}
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-sky-500">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-pink-500">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-700">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}