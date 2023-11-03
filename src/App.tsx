import { useEffect, useState } from "react";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import { SELECTED_PAGE } from "./shared/types";

const App = () => {
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
      <div className="xs:bg-blue-300 md:bg-white sm:bg-blue-300 h-[75%]">
        <Home setSelectedPage={setSelectedPage} />
      </div>
    </div>
  );
};

export default App;
