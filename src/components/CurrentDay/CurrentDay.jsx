import style from "./CurrentDay.module.scss";

import MainCurrentDay from "./MainCurrentDay/MainCurrentDay";
import DetailsCurrentDay from "./DetailsCurrentDay/DetailsCurrentDay";

export const CurrentDay = () => {
  return (
    <div className={style.currentDay}>
      <div className={style.wrapper}>
        <MainCurrentDay />

        <DetailsCurrentDay />
      </div>
    </div>
  );
};
