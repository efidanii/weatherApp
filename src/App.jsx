import "./App.css";
import { CurrentDay } from "./components/CurrentDay/CurrentDay";
import { Header } from "./components/Header/Header";
import { NextDays } from "./components/NextDays/NextDays";

function App() {
  return (
    <div>
      <Header />
      <CurrentDay />
      <NextDays />
    </div>
  );
}

export default App;
