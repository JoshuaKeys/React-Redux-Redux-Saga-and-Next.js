import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { parse } from 'query-string';
import Navbar from '../../components/navbar/Navbar';
import './Overview.less';
import Spinner from '../../components/spinner/Spinner';
import Link from 'next/link';

export default function CityName() {
    const selection = useSelector(state => state.selection);
    const [weatherState, setWeather] = useState({
        weather: null,
        main: null,
        name: "",
        country: "",
    })
    const onDropDownChange = () => {
        setWeather({
            weather: null,
            main: null,
            name: "",
            country: ""
        });
        loadWeatherData(selection, router, weatherState, setWeather);
    };
    const router = useRouter();
    useEffect(() => {
        loadWeatherData(selection, router, weatherState, setWeather);
    }, [router])

    if (!weatherState.weather) {
        return <Spinner />;
    } else {
        return <div className="weather">
            <Navbar showDropdown={true} dropDownChanged={onDropDownChange} />
            <div className="weather__container">
                <Link href="/"><button className="weather__details-btn">Back</button></Link>
                {weatherState.main ? (
                    <Fragment>
                        <h1 className="weather__header">Weather in {weatherState.name}</h1>
                        <ul className="weather__details">
                            <li className="weather__details-item">
                                <p>Country: {weatherState.country}</p>
                            </li>
                            <li className="weather__details-item">
                                <p>Description: {weatherState.weather.description}</p>
                            </li>
                            <li className="weather__details-item">
                                <p>Feels Like: {weatherState.main.feels_like}</p>
                            </li>
                            <li className="weather__details-item">
                                <p>Humidity: {weatherState.main.humidity}</p>
                            </li>
                            <li className="weather__details-item">
                                <p>Temperature: {weatherState.main.temp}</p>
                            </li>
                            <li className="weather__details-item">
                                <p>Max Temperature: {weatherState.main.temp_max}</p>
                            </li>
                            <li className="weather__details-item">
                                <p>Min Temperature: {weatherState.main.temp_min}</p>
                            </li>
                        </ul>
                    </Fragment>
                ) : <h1 className="weather__header">No Data found for the specified city</h1>}

            </div>
        </div>
    }
}

async function loadWeatherData(selection, router, weatherState, setWeather) {
    try {
        const { units, language } = selection;
        const selectedUnits = units.find(unit => unit.selected === true)
        const selectedLang = language.find(lang => lang.selected === true)
        const result = parse(router.asPath.substring(1));
        const name = router.query.cityName;
        const response = await fetch(`http://localhost:3000/api/city-weather?name=${name}&units=${selectedUnits.title}&lang=${selectedLang.title}`);
        const data = await response.json();
        setWeather({ ...weatherState, weather: data.weather[0], main: data.main, name: data.name, country: data.sys.country })
    } catch (err) {
        console.log(err);
        setWeather({ weather: [], main: null, name: null, country: "" })
    }
}