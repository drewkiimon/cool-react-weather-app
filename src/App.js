import './App.css';

import { useState } from 'react';

// components
import CityButton from './components/CityButton';
import CityDetails from './components/CityDetails';

const CITIES = [
	{
		name: 'Hayward',
		zipcode: 94540,
	},
	{
		name: 'Emeryville',
		zipcode: 94662,
	},
	{
		name: 'Berkeley',
		zipcode: 94720,
	},
	{
		name: 'Union City',
		zipcode: 94587,
	},
	{
		name: 'Fremont',
		zipcode: 94555,
	},
];

const App = () => {
	const [location, setLocation] = useState(null);
	const [weather, setWeather] = useState(null);

	return (
		<div className='App'>
			<div className='city-button-holder'>
				{CITIES.map((city) => {
					return (
						<CityButton
							key={city.zipcode}
							zipcode={city.zipcode}
							name={city.name}
							onWeatherChange={setWeather}
							onLocationChange={setLocation}></CityButton>
					);
				})}
			</div>
			<CityDetails
				location={location}
				currentWeather={weather}></CityDetails>
		</div>
	);
};

export default App;
