import { motion } from "framer-motion";
import { SELECTED_PAGE } from "../../shared/types";
import Link from "@/shared/Link";

type Props = {
  selectedPage: SELECTED_PAGE;
  setSelectedPage: (value: SELECTED_PAGE) => void;
  forecastData: any;
};

const Forecast = ({ selectedPage, setSelectedPage, forecastData }: Props) => {
  const forecastDiv = `text-sm py-2 font-semibold`;

  function formatDateToTime(dateString: string): string {
    const originalDate = new Date(dateString);
    const hours = originalDate.getHours();
    const minutes = originalDate.getMinutes();

    let formattedTime;
    if (hours === 12 && minutes === 0) {
      formattedTime = "12PM";
    } else {
      const period = hours < 12 ? "AM" : "PM";
      const formattedHours = hours % 12 || 12;
      formattedTime = `${formattedHours}${period}`;
    }

    return formattedTime;
  }
  return (
    <section id="forecast" className="px-8 mx-auto max-w-2xl min-h-screen">
      {forecastData && forecastData.length! > 0 && (
        <div className="pt-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            onViewportEnter={() => setSelectedPage(SELECTED_PAGE.FORECAST)}
            className="flex justify-between"
          >
            <p className="font-sembold">Today</p>
            <p className="underline">
              <Link
                page="Weekly Forecast"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="grid grid-cols-4 gap-4 pt-6 pl-4 md:pl-16"
          >
            {forecastData &&
              forecastData.map(
                (forecast: {
                  main: any;
                  weather: any;
                  dt: number;
                  temp: number;
                  dt_txt: any;
                }) => (
                  <div
                    key={forecast.dt}
                    className="flex flex-col items-center justify-center"
                  >
                    <img
                      alt="weather-icon"
                      src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                    />
                    <p className={forecastDiv}>
                      {Math.floor(forecast.main.temp)}&deg;C
                    </p>
                    <p className="text-xs">
                      {formatDateToTime(forecast.dt_txt)}
                    </p>
                  </div>
                )
              )}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Forecast;
