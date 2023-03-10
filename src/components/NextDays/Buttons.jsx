import React from "react";
import style from "./NextDays.module.scss";

export const Buttons = () => {
  return (
    <div className={style.buttons}>
      <button type="button" class="btn btn-primary">
        На неделю
      </button>
      <button type="button" class="btn btn-light">
        На месяц
      </button>
      <button type="button" class="btn btn-light">
        На 10 дней
      </button>
    </div>
  );
};
