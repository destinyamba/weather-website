import { Drop, Umbrella, Wind } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const Climate = () => {
  const centerDiv = "items-center justify-center flex flex-col";
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className={`${centerDiv} py-12 relative`}
    >
      <div className="bg-blue-100 rounded-lg text-gray-800 text-sm w-4/5 flex gap-8 items-center justify-center py-8 ">
        {/* Humidity */}
        <div className={`${centerDiv}`}>
          <Drop />
          <p>Humidity</p>
          <p>62%</p>
        </div>
        {/* Precipitation */}
        <div className={`${centerDiv}`}>
          <Umbrella />
          <p>Precipitation</p>
          <p>10%</p>
        </div>
        {/* Windy */}
        <div className={`${centerDiv}`}>
          <Wind />
          <p>Wind Speed</p>
          <p>18 km/h</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Climate;
