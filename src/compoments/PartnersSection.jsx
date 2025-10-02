import React from "react";
import { motion } from "framer-motion";

import { variable } from "../constante";

const partners = [
  {
    name: "Orange",
    logo: "/logos/orange.png",
    url: "https://www.orange.cm",
  },
  {
    name: "Orange Digital Center",
    logo: "/logos/orange-digital.png",
    url: "https://digitalcenter.orange.com",
  },
  {
    name: "EY",
    logo: "/logos/ey.png",
    url: "https://www.ey.com",
  },
  {
    name: "D. Moukouri & Partners",
    logo: "/logos/moukouri.png",
    url: "https://www.uggc.com",
  },
  {
    name: "AWS",
    logo: "/logos/aws.png",
    url: "https://aws.amazon.com",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-14 bg-gray-50 sm:py-20 lg:py-28">
      <div className="px-4 mx-auto max-w-[95%] md:max-w-[88%] lg:max-w-[80%]">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            style={{
              fontFamily: "Dubai Bold",
              color: "#111",
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold"
          >
            Nos{" "}
            <span style={{ color: variable.primaire }}>
              partenaires
            </span>{" "}
            nous font confiance
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Plus de 25,000 utilisateurs et organisations soutiennent Diamco
          </p>
        </motion.div>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12 md:mt-16">
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-14 object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}