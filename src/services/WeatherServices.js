class GetWeatherService {
  _appid = "bf353cc2866f00f966aa833860c7f197";

  getWeatherByApi = async (cords) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${cords}&appid=${this._appid}`
    );
    return response.json();
  };
}

export default GetWeatherService;
