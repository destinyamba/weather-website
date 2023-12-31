import Cloud from "@/assets/Cloud.png";
import { SELECTED_PAGE } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SELECTED_PAGE) => void;
  data: any;
  timeData: any;
};

const Home = ({ setSelectedPage, data, timeData }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const centerDiv = "flex items-center justify-center";

  const date = new Date(timeData.date_time_txt);
  let formattedDateTime;

  if (date instanceof Date && !isNaN(date.getTime())) {
    // Format date
    const formattedDate = date?.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    // Format time
    const formattedTime = date?.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    // Join date and time
    formattedDateTime = `${formattedDate} ${formattedTime}`;
  } else formattedDateTime = "";

  return (
    <section id="home" className="xs:text-white md:text-black m-auto w-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        onViewportEnter={() => setSelectedPage(SELECTED_PAGE.HOME)}
        className={`${flexBetween} top-0 z-30 w-full pt-6 flex-col`}
      >
        <div className="relative gap-10 text-2xl mt-4">
          {/* Location */}
          <div className={`${centerDiv} `}>
            {data && data.sys && (
              <p className="text-xl">
                {data.name},{data.sys.country}
              </p>
            )}
          </div>
          {/* Date & Time */}
          <div className={`${centerDiv}`}>
            {<p className="text-sm">{formattedDateTime}</p>}
          </div>

          {/* Cloud image */}
          <div>
            <img alt="cloud" src={Cloud} />
          </div>
          {/* Temperature */}
          <div className={`${centerDiv} mt-4`}>
            {data.main && (
              <h1 className="md:text-9xl xs:text-7xl">
                {data.main.temp.toFixed()}&deg;C
              </h1>
            )}
          </div>

          {/* Weather */}
          <div className={`${centerDiv} relative`}>
            {data.weather && <p className="text-md">{data.weather[0].main}</p>}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
