import React from "react";
import { motion } from "framer-motion";

import awsLogo from '../assets/aws.png'
import eyLogo from '../assets/ey.png'
import meta from '../assets/meta.png'
import orangeDigitalLogo from '../assets/ODC.png'
import orangeLogo from '../assets/orange.png'
import { variable } from "../constante";

const partners = [
  {
    name: "Orange",
    logo: orangeLogo,
    url: "https://www.orange.cm",
  },
  {
    name: "Orange Digital Center",
    logo: orangeDigitalLogo,
    url: "https://digitalcenter.orange.com",
  },
  {
    name: "EY",
    logo: eyLogo,
    url: "https://www.ey.com",
  },
  {
    name: "D. Moukouri & Partners",
    logo: meta,
    url: "https://www.meta.com",
  },
  {
    name: "AWS",
    logo: awsLogo,
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
              color: variable.primaire,
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold"
          >
            Nos{" "}
            <span style={{ color: variable.secondaire }}>
              partenaires
            </span>{" "}
          </h2>
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
                className="max-h-auto object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}