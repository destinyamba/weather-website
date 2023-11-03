import { MagnifyingGlass } from "@phosphor-icons/react";
import { motion } from "framer-motion";

type Prop = {
  value: string;
  onChange: any;
  onKeyDown: any;
};

const Input = ({ value, onChange, onKeyDown }: Prop) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="pt-6"
    >
      <form>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"></label>
        <div className="relative border-none">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlass color="text-black" />
          </div>
          <input
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50"
            placeholder="Search Locations..."
            required
          />
        </div>
      </form>
    </motion.div>
  );
};

export default Input;
