import { useSelector } from "react-redux";

import style from "../CurrentDay.module.scss";

const MainCurrentDay = () => {
  const weather = useSelector((state) => state.oneDayWeatherArr);

  return (
    <div className={style.currentDay__Left}>
      <div className={style.currentTemperature}>
        {weather.current !== undefined
          ? Math.floor(weather.current.temp_c)
          : "0"}
        °
      </div>
      <img
        src={
          weather.current !== undefined ? weather.current.condition.icon : "1"
        }
        alt=""
      />{" "}
      <div className={style.currentWeather}>
        {weather.current !== undefined ? weather.current.condition.text : " "}
      </div>
      <div className={style.currentLocation}>
        {weather.location !== undefined
          ? `Город: ${weather.location.name}`
          : "Город: не выбран"}
      </div>
    </div>
  );
};

export default MainCurrentDay;
