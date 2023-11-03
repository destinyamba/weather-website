import { Drop, Umbrella, Wind } from "@phosphor-icons/react";
import { motion } from "framer-motion";

type Prop = {
  data: any;
};

const Climate = ({ data }: Prop) => {
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
          {data.main && <p>{data.main.humidity}%</p>}
        </div>
        {/* Precipitation */}
        <div className={`${centerDiv}`}>
          <Umbrella />
          <p>Pressure</p>
          {data.main && <p>{data.main.pressure} atm</p>}
        </div>
        {/* Windy */}
        <div className={`${centerDiv}`}>
          <Wind />
          <p>Wind Speed</p>
          {data.wind && <p>{data.wind.speed} km/h</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default Climate;
