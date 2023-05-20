import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { CurrentDay } from "./components/CurrentDay/CurrentDay";
import { Header } from "./components/Header/Header";
import { NextDays } from "./components/NextDays/NextDays";
import { useEffect } from "react";
import { fetchOneDayWeather } from "./store/weatherSlice";

function App() {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city);

  useEffect(() => {
    dispatch(fetchOneDayWeather(city));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <CurrentDay />
      <NextDays />
    </div>
  );
}

export default App;
