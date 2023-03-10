import React from "react";
import style from "./CurrentDay.module.scss";
import sun from "../WetherIcons/sun.svg";
import temp from "./images/temp.svg";
import pressure from "./images/pressure.svg";
import precipitation from "./images/precipitation.svg";
import wind from "./images/wind.svg";

export const CurrentDay = () => {
  const currentDayIfo = [
    {
      icon: temp,
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon: pressure,
      name: "Давление ",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon: precipitation,
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon: wind,
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <div className={style.currentDay}>
      <div className={style.wrapper}>
        <div className={style.currentDay__Left}>
          <div className={style.currentTemperature}>20°</div>
          <div className={style.currentTime}>Время: 12:00</div>
          <div className={style.currentLocation}>Город: Стамбул</div>
          <img src={sun} alt="" />
        </div>
        <div className={style.currentDay__Right}>
          {currentDayIfo.map((item) => {
            return (
              <div className={style.currentDay__Right_Info}>
                <img src={item.icon} alt="" />
                <div className={style.currentDay__Right_Colums}>
                  <div className={style.currentDay__Right_Name}>
                    {item.name}
                  </div>
                  <div className={style.currentDay__Right_Value}>
                    {item.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
