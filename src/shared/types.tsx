export enum SELECTED_PAGE {
  HOME = "home",
  FORECAST = "forecast",
  WEEKLYFORECAST = "weeklyforecast",
}

export type forecastType = {
  list: [
    dt: number,
    main: {
      temp: number;
    },
    weather: {
      description: string;
      icon: string;
    }[],
  ];
};

export type ForecastData = {
  list: forecastType[];
};

export type ForecastDay = {
  date: string;
  forecasts: forecastType[];
};
