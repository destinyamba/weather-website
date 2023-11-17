import Climate from "@/shared/Climate";

type Props = {
  data: any;
  forecastData: any;
};

const WeeklyForecast = ({ data, forecastData }: Props) => {
  const centerDiv = "flex items-center justify-center";

  // Filter forecasts to unique days
  const uniqueDays = new Set<number>();
  const filteredForecasts: any[] = [];
  if (forecastData) {
    forecastData.forEach((forecast: any) => {
      const day = new Date(forecast.dt_txt).getDate();
      uniqueDays.add(day);
    });

    uniqueDays.forEach((day) => {
      const forecast = forecastData.find(
        (f: any) => new Date(f.dt_txt).getDate() === day
      );
      filteredForecasts.push(forecast);
    });
  }

  return (
    <section
      id="weeklyforecast"
      className="px-8 xs:px-0 mx-auto max-w-5xl mt-12"
    >
      {/* Location */}
      <div className={`${centerDiv} `}>
        {data && data.sys && (
          <p className="text-xl">
            {data.name},{data.sys.country}
          </p>
        )}
      </div>
      {forecastData && forecastData.length! > 0 && (
        <>
          <div className="mx-auto lg:w-[70%] md:w-[70%] xs:w-[80%]">
            <div className="flex justify-start">
              <p className="font-sembold lg:ml-6 xs:ml-0">Next 5 Days</p>
            </div>
          </div>
          <div className="mx-auto w-full">
            <Climate data={data} />
          </div>
        </>
      )}

      {/* Forecast fore next 5 days */}
      <div className="mt-12 mx-auto max-w-2xl px-12 flex-col items-center justify-between">
        {forecastData &&
          filteredForecasts &&
          filteredForecasts.map((forecast: any, index: number) => (
            <>
              <div
                key={`forecast.dt-${index}`}
                className="flex justify-between pb-4 items-center"
              >
                <p>
                  {new Date(forecast.dt_txt).toLocaleDateString("en-US", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    alt="weather-icon"
                    width={48}
                    src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                  />
                  <p>{Math.floor(forecast.main.temp)} °C</p>
                </div>
              </div>
            </>
          ))}
      </div>
    </section>
  );
};

export default WeeklyForecast;
