import { SetStateAction, useEffect, useState } from "react";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import { SELECTED_PAGE } from "./shared/types";
import axios from "axios";
import Input from "./shared/Input";

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState<string>("");
  const [timeData, setTimeData] = useState({});

  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=de6050d3009d5a8038e9c72c40e9da93`;
  const dateAndTimeApi = `https://api.ipgeolocation.io/timezone?apiKey=bf7cf0f0a43e45d29eb033a306fbfa3d&location=${location}`;

  const searchLocation = (event: { key: string }) => {
    if (event.key === "Enter") {
      axios.get(weatherApi).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      axios.get(dateAndTimeApi).then((response) => {
        setTimeData(response.data);
        console.log(response.data);
      });
      setTimeData("");
      setLocation("");
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

      <div className="xs:bg-blue-300 md:bg-white sm:bg-blue-300 h-[83%]">
        <div className="xs:pt-24 md:pt-28 flex flex-col items-center justify-center">
          <Input
            value={location}
            onChange={(event: {
              target: { value: SetStateAction<string> };
            }) => {
              setLocation(event.target.value);
              setTimeData(event.target.value);
            }}
            onKeyDown={searchLocation}
          />
        </div>
        <Home
          setSelectedPage={setSelectedPage}
          data={data}
          timeData={timeData}
        />
      </div>
    </div>
  );
};

export default App;
