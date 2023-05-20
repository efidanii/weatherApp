import { useSelector } from "react-redux";
import style from "../CurrentDay.module.scss";
import temp from "./images/temp.svg";
import pressure from "./images/pressure.svg";
import precipitation from "./images/precipitation.svg";
import wind from "./images/wind.svg";

const DetailsCurrentDay = () => {
  const weather = useSelector((state) => state.oneDayWeatherArr);

  const windGust = (gust) => {
    if (gust < 1.6) {
      return "штиль";
    } else if (gust > 3.2 && gust < 4.8) {
      return "легкий ветерок";
    } else if (gust > 4.9 && gust < 11.3) {
      return "легкий бриз";
    } else if (gust > 11.4 && gust < 19.3) {
      return "слабый бриз";
    } else if (gust > 19.4 && gust < 28.9) {
      return "умереный бриз";
    } else if (gust > 30 && gust < 38.6) {
      return "свежий бриз";
    } else if (gust > 38.7 && gust < 49.9) {
      return "сильный бриз";
    } else if (gust > 50 && gust < 61.1) {
      return "сильный ветер";
    } else if (gust > 61.2 && gust < 74) {
      return "буря";
    } else if (gust > 74.1 && gust < 86.9) {
      return "сильная буря";
    } else if (gust > 87 && gust < 101.4) {
      return "полная буря";
    } else if (gust > 101.5 && gust < 120.7) {
      return "шторм";
    } else if (gust > 120.7) {
      return "ураган";
    } else if (gust === null) {
      return "";
    }
  };
  const windDeg = (deg) => {
    if (deg > 0 && deg < 22.5) {
      return "северный";
    } else if (deg > 22.6 && deg < 67.5) {
      return "северо-восточный";
    } else if (deg > 67.6 && deg < 112.5) {
      return "восточный";
    } else if (deg > 112.6 && deg < 157.5) {
      return "юго-восточный";
    } else if (deg > 157.6 && deg < 202.5) {
      return "южный";
    } else if (deg > 202.6 && deg < 247.5) {
      return "юго-западный";
    } else if (deg > 247.5 && deg < 292.5) {
      return "западныйй";
    } else if (deg > 292.6 && deg < 337) {
      return "северо-западный";
    } else if (deg > 337.1 && deg < 360) {
      return "северный";
    }
  };
  return (
    <div className={style.currentDay__Right}>
      <div className={style.currentDay__Right_Info}>
        <img src={temp} alt="" />
        <div className={style.currentDay__Right_Colums}>
          <div className={style.currentDay__Right_Name}>Температура</div>
          <div className={style.currentDay__Right_Value}>
            {weather.current !== undefined
              ? `${Math.floor(
                  weather.current.temp_c
                )}° ощущается как ${Math.floor(weather.current.feelslike_c)}°`
              : "-"}
          </div>
        </div>
      </div>
      <div className={style.currentDay__Right_Info}>
        <img src={pressure} alt="" />
        <div className={style.currentDay__Right_Colums}>
          <div className={style.currentDay__Right_Name}>Давление</div>
          <div className={style.currentDay__Right_Value}>
            {weather.current !== undefined
              ? `${weather.current.pressure_mb} мм ртутного столба`
              : "-"}
          </div>
        </div>
      </div>
      <div className={style.currentDay__Right_Info}>
        <img src={precipitation} alt="" />
        <div className={style.currentDay__Right_Colums}>
          <div className={style.currentDay__Right_Name}>Влажность</div>
          <div className={style.currentDay__Right_Value}>
            {weather.current !== undefined
              ? `${weather.current.humidity} %`
              : "-"}
          </div>
        </div>
      </div>
      <div className={style.currentDay__Right_Info}>
        <img src={wind} alt="" />
        <div className={style.currentDay__Right_Colums}>
          <div className={style.currentDay__Right_Name}>Ветер</div>
          <div className={style.currentDay__Right_Value}>
            {weather.current !== undefined
              ? `${weather.current.wind_mph} м/с ${windDeg(
                  weather.current.wind_degree
                )} — ${windGust(weather.current.wind_mph)}`
              : "-"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCurrentDay;
