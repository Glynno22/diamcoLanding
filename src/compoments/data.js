import { ins } from "motion/react-client";

import application from "../assets/image18.png";
import installation from "../assets/image19.png";
import suivi from "../assets/image20.png";
import maintenance from "../assets/image21.png";

export const avantages = [
  {
    id: 1,
    titre: "Application Mobile Diamco",
    categorie: "APPLICATION",
    description: "Notre application mobile vous connecte rapidement à tous nos services.",
    image: application,
  },
  {
    id: 2,
    titre: "Service De Maintenance",
    categorie: "MAINTENANCE",
    description: "Un service de maintenance réactif pour résoudre vos pannes techniques.",
    image: maintenance,
  },
  {
    id: 3,
    titre: "Service De Suivi Après Vente",
    categorie: "SUIVI",
    description: "Toujours disponible pour répondre à vos questions et intervenir si nécessaire.",
    image: suivi,
  },
  {
    id: 4,
    titre: "Service D’installation Inclus",
    categorie: "INSTALLATION",
    description: "Installation professionnelle incluse pour un déploiement sans stress.",
    image: installation,
  },
];