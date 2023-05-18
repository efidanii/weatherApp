import React from "react";
import style from "./NextDays.module.scss";

export const Buttons = () => {
  return (
    <div className={style.buttons}>
      <button type="button" className="btn btn-primary">
        На неделю
      </button>
      <button type="button" className="btn btn-light">
        На месяц
      </button>
      <button type="button" className="btn btn-light">
        На 10 дней
      </button>
    </div>
  );
};
