import React from "react";
import { Buttons } from "./Buttons";
import style from "./NextDays.module.scss";
import rain from "../WetherIcons/rain.svg";
import small_rain_sun from "../WetherIcons/small_rain_sun.svg";
import small_rain from "../WetherIcons/small_rain.svg";
import sun from "../WetherIcons/sun.svg";

export const NextDays = () => {
  const otherDays = [
    {
      id: "1",
      title: "Сегодня",
      date: "10 марта",
      icon: sun,
      temperature: "18°",
      info: "Облачно",
    },
  ];
  return (
    <>
      <Buttons />
      <div className={style.NextDays}>
        <div className={style.NextDays_wrapper}>
          {otherDays.map((item) => {
            return (
              <div className={style.NextDays__oneDay} key={item.id}>
                <div className={style.NextDays__title}>{item.title}</div>
                <div className={style.NextDays__date}>{item.date}</div>
                <div className={style.NextDays__icon}>
                  <img src={item.icon} alt="" />
                </div>
                <div className={style.NextDays__temperature}>
                  {item.temperature}
                </div>
                <div className={style.NextDays__info}>{item.info}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
