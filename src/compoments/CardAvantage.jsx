import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const CardAvantage = ({ categorie, titre, description, image, active, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative cursor-pointer rounded-2xl overflow-hidden shadow-md bg-white flex flex-col group"
    >
      {/* Image + Overlay */}
      <div className="relative">
        <img
          src={image}
          alt={titre}
          className="w-full h-64 object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
        
        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p className="text-xs uppercase tracking-wider text-green-400 mb-1 font-medium">{categorie}</p>
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

      {/* Description - visible only if active */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="p-4 bg-white text-gray-700"
          >
            <p className="text-sm leading-relaxed">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CardAvantage;