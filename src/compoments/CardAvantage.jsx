import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const CardAvantage = ({ categorie, titre, description, image, active, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative cursor-pointer rounded-2xl overflow-hidden shadow-md bg-white flex flex-col"
    >
      {/* Image + Overlay */}
      <div className="relative">
        <img
          src={image}
          alt={titre}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p
            className="text-xs uppercase tracking-wider mb-1 font-medium"
            style={{ fontFamily: "Dubai Bold", color: "#99D1E4" }}
          >
            {categorie}
          </p>
          <h3 className="text-lg font-semibold leading-tight">{titre}</h3>
        </div>

        {/* Arrow icon */}
        <div className="absolute bottom-4 right-4">
          <motion.div
            animate={{ rotate: active ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <ChevronDown className="w-4 h-4 text-white" />
          </motion.div>
        </div>
      </div>

      {/* Description uniquement si active */}
      {active && (
      <AnimatePresence>

          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="p-4 text-gray-700"
          >
            <p className="text-sm leading-relaxed">{description}</p>
          </motion.div>

      </AnimatePresence>
      )}
    </motion.div>
  );
};

export default CardAvantage;