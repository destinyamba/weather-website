import { SetStateAction, useEffect, useState } from "react";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import { SELECTED_PAGE } from "./shared/types";
import axios from "axios";
import Input from "./shared/Input";
import Forecast from "./scenes/forecast";

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState<string>("");
  const [timeData, setTimeData] = useState({});
  const [forecastData, setForecastData] = useState([]);

  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=de6050d3009d5a8038e9c72c40e9da93`;
  const dateAndTimeApi = `https://api.ipgeolocation.io/timezone?apiKey=bf7cf0f0a43e45d29eb033a306fbfa3d&location=${location}`;
  const forecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=de6050d3009d5a8038e9c72c40e9da93`;

  const searchLocation = (event: { key: string }) => {
    if (event.key === "Enter") {
      axios
        .get(weatherApi)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
      axios
        .get(dateAndTimeApi)
        .then((response) => {
          setTimeData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching date and time data:", error);
        });
      axios
        .get(forecastApi)
        .then((response) => {
          console.log(response.data.list.slice(0, 4));
          setForecastData(response.data.list.slice(0, 4));
        })
        // .then((res) => setForecastData(res.data.list.slice(0, 4)))
        .catch((error) => {
          console.error("Error fetching forecast data:", error);
        });
      setTimeData("");
      setLocation("");
      setForecastData([]);
    }
  };

  const [selectedPage, setSelectedPage] = useState<SELECTED_PAGE>(
    SELECTED_PAGE.HOME
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SELECTED_PAGE.HOME);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app md:text-black ">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />

      <div className="xs:bg-blue-300 md:bg-white sm:bg-blue-300 h-[83%] relative">
        <div className="xs:pt-24 h-1/4 flex flex-col items-center justify-center relative ">
          <Input
            value={location}
            onChange={(event: {
              target: {
                value: SetStateAction<string>;
                forecastValue: SetStateAction<never[]>;
              };
            }) => {
              setLocation(event.target.value);
              setTimeData(event.target.value);
              setForecastData(event.target.forecastValue);
            }}
            onKeyDown={searchLocation}
            setSelectedPage={setSelectedPage}
          />
        </div>
        <Home
          setSelectedPage={setSelectedPage}
          data={data}
          timeData={timeData}
        />
      </div>
      <Forecast
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        forecastData={forecastData}
      />
    </div>
  );
};

export default App;
