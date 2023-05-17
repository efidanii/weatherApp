const getWeatherService = () => {
    const _apiBase = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=`,
        _appid = 'bf353cc2866f00f966aa833860c7f197'

    const getWeatherByApi = async () => {
        const response = await fetch(`${_apiBase}${_appid}`)
        return response
    }


}

export default getWeatherService