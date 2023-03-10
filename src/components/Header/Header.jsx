import React from "react";
import style from "./Header.module.scss";
import logo from "./logo.png";
import Select from "react-select";

export const Header = () => {
  const optionsStyle = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: "none",
      width: "150px",
      background: "rgba(250, 250, 250, 0.8)",
    }),
  };
  const options = [
    { value: "Стамбул", label: "Стамбул" },
    { value: "Москва", label: "Москва" },
    { value: "Батуми", label: "Батуми" },
  ];

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.header__left}>
          <img src={logo} alt="" />
          <div className={style.header__title}>Weather App</div>
        </div>
        <div className={style.header__right}>
          <Select
            options={options}
            defaultValue={options[0]}
            styles={optionsStyle}
          />
        </div>
      </div>
    </header>
  );
};
