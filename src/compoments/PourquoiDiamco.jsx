import { useState } from "react";

import CardAvantage from "./CardAvantage";
import { avantages } from "./data";

const PourquoiDiamco = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="py-20  px-6 lg:px-20 flex flex-col justify-center bg-white">
      <div className="text-center mb-12">
        <p className="text-gray-500 uppercase tracking-wider text-sm mb-4">
          Nos services
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-16">
          Pourquoi Diamco ?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
        {avantages.map((item) => (
          <CardAvantage
            key={item.id}
            {...item}
            active={activeId === item.id}
            onClick={() =>
              setActiveId(activeId === item.id ? null : item.id)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default PourquoiDiamco;