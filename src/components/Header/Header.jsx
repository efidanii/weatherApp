import React, { useState } from "react";
import style from "./Header.module.scss";
import logo from "./logo.png";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NewCity, fetchOneDayWeather } from "../../store/weatherSlice";

export const Header = () => {
  const [valueInputAdd, setValueAdd] = useState("");
  const dispatch = useDispatch();
  const addNewCity = () => {
    dispatch(NewCity(valueInputAdd));
    dispatch(fetchOneDayWeather(valueInputAdd));
    setValueAdd("");
  };

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.header__left}>
          <img src={logo} alt="" />
          <div className={style.header__title}>Weather App</div>
        </div>
        <div className={style.header__right}>
          <input
            type="text"
            placeholder="Введите город"
            value={valueInputAdd}
            onChange={(e) => setValueAdd(e.target.value)}
          />
          <button onClick={() => dispatch(addNewCity)}>
            <FaSearch />
          </button>
        </div>
      </div>
    </header>
  );
};
