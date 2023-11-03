import Cloud from "@/assets/Cloud.png";
import Climate from "@/shared/Climate";
import { SELECTED_PAGE } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SELECTED_PAGE) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const centerDiv = "flex items-center justify-center";
  return (
    <section
      id="home"
      className="xs:text-white md:text-black py-12 m-auto w-auto"
    >
      <div className={`${flexBetween} top-0 z-30 w-full py-12 flex-col`}>
        <div className="py-12 gap-10 text-2xl">
          {/* Location */}
          <div className={`${centerDiv} md:pt-4`}>
            <p className="text-xl">Belfast, Northern Ireland</p>
          </div>
          {/* Date & Time */}
          <div className={`${centerDiv}`}>
            <p className="text-sm ">Today, 2nd November. 11AM</p>
          </div>

          {/* Cloud image */}
          <div>
            <img alt="cloud" src={Cloud} />
          </div>
          {/* Temperature */}
          <div className={`${centerDiv}`}>
            <h1 className="text-9xl">20&deg;C</h1>
          </div>

          {/* Weather */}
          <div className={`${centerDiv}`}>
            <p className="text-md">Cloudy</p>
          </div>

          {/* Climate Component */}
          <Climate></Climate>
        </div>
      </div>
    </section>
  );
};

export default Home;
