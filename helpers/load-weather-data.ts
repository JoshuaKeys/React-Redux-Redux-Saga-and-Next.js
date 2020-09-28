export async function loadWeatherData(selection, router, weatherState, setWeather) {
    try {
        const { units, language } = selection;
        const selectedUnits = units.find(unit => unit.selected === true)
        const selectedLang = language.find(lang => lang.selected === true)
        const result = router.asPath.split('/')
        const name = result[result.length - 1];
        const response = await fetch(`http://localhost:3000/api/city-weather?name=${name}&units=${selectedUnits.title}&lang=${selectedLang.title}`);
        const data = await response.json();
        setWeather({ ...weatherState, weather: data.weather[0], main: data.main, name: data.name, country: data.sys.country })
    } catch (err) {
        console.log(err);
        setWeather({ weather: [], main: null, name: null, country: "" })
    }
}