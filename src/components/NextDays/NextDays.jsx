import style from "./NextDays.module.scss";
import sun from "../WetherIcons/sun.svg";
import { useSelector } from "react-redux";

export const NextDays = () => {
  const forecastArr = useSelector((state) => state.oneDayWeatherArr);

  function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek)
      ? null
      : ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][dayOfWeek];
  }
  function getMonth(date) {
    const months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
    const dd = date.slice(-2),
      mm = months[Number(date.slice(5, 7)) - 1];
    return `${dd}  ${mm}`;
  }

  return (
    <div className={style.NextDays}>
      <div className={style.NextDays_wrapper}>
        {forecastArr.forecast !== undefined &&
          forecastArr.forecast.forecastday.map((item) => {
            return (
              <div className={style.NextDays__oneDay} key={item.date}>
                <div className={style.NextDays__dayOfWeek}>
                  {getDayOfWeek(item.date)}
                </div>
                <div className={style.NextDays__date}>
                  {getMonth(item.date)}
                </div>
                <div className={style.NextDays__icon}>
                  <img src={item.day.condition.icon} alt="" />
                </div>
                <div className={style.NextDays__temperature}>
                  <div className={style.NextDays__temperature_max}>
                    {Math.floor(item.day.maxtemp_c)}
                  </div>
                  <div className={style.NextDays__temperature_min}>
                    {Math.floor(item.day.mintemp_c)}
                  </div>
                </div>
                <div className={style.NextDays__info}>
                  {item.day.condition.text}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
