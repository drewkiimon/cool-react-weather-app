import Axios from 'axios';

const WEATHER_API = 'aafbb064363349e2967150242210402';

const CityButton = ({ zipcode, name, onWeatherChange, onLocationChange }) => {
	const getCurrentWeather = async () => {
		try {
			let currentWeather = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API}&q=${zipcode}`;

			let { data } = await Axios.get(currentWeather);

			onWeatherChange(data.location);
			onLocationChange(data.current);
		} catch (err) {
			console.error(err);
		}
	};

	return <button onClick={getCurrentWeather}>{name}</button>;
};

export default CityButton;
