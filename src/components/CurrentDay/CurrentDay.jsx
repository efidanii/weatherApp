import React, { useEffect, useState } from "react";
import style from "./CurrentDay.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherAction } from "../../store/weatherSlice";

export const CurrentDay = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherAction("moscow"));
  }, []);

  const state = useSelector((state) => state);
  const { weather, loading, error } = state;
  console.log(loading);

  return (
    <div className={style.currentDay}>
      <div className={style.wrapper}>
        <div className={style.currentDay__Left}>
          <div className={style.currentTemperature}>
            {weather === undefined
              ? `Loading`
              : `${Math.floor(weather.main.temp - 273)}°`}
          </div>
          <div className={style.currentTime}>Время: 12:00</div>
          {/* <div className={style.currentLocation}>Город: {weather.name}</div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=""
          /> */}
        </div>
        <div className={style.currentDay__Right}>
          {/* <div className={style.currentDay__Right_Info}>
            <img src={temp} alt="" />
            <div className={style.currentDay__Right_Colums}>
              <div className={style.currentDay__Right_Name}>Температура</div>
              <div className={style.currentDay__Right_Value}>
                {`${Math.floor(
                  weather.main.temp - 273
                )}° - ощущается как ${Math.floor(
                  weather.main.feels_like - 273
                )}°`}
              </div>
            </div>
          </div>
          <div className={style.currentDay__Right_Info}>
            <img src={pressure} alt="" />
            <div className={style.currentDay__Right_Colums}>
              <div className={style.currentDay__Right_Name}>Давление</div>
              <div className={style.currentDay__Right_Value}>
                765 мм ртутного столба - нормальное
              </div>
            </div>
          </div>
          <div className={style.currentDay__Right_Info}>
            <img src={precipitation} alt="" />
            <div className={style.currentDay__Right_Colums}>
              <div className={style.currentDay__Right_Name}>Осадки</div>
              <div className={style.currentDay__Right_Value}>Без осадков</div>
            </div>
          </div>
          <div className={style.currentDay__Right_Info}>
            <img src={wind} alt="" />
            <div className={style.currentDay__Right_Colums}>
              <div className={style.currentDay__Right_Name}>Ветер</div>
              <div className={style.currentDay__Right_Value}>
                3 м/с юго-запад - легкий ветер
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
