export enum SELECTED_PAGE {
  HOME = "home",
  FORECAST = "forecast",
}

export type forecastType = {
  list: [
    {
      main: {
        temp: number;
      };
      weather: {
        icon: string;
      };
      dt_txt: string;
    },
  ];
};
