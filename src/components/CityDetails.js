const CityDetails = ({ location, currentWeather }) => {
	return (
		<div>
			{location && currentWeather ? (
				<div>
					<h1>
						{currentWeather.name}, {currentWeather.region}
					</h1>
					<h2>{location.condition.text}</h2>
					<h3>Feels like: {location.feelslike_f}</h3>
					<img src={location.condition.icon}></img>
				</div>
			) : (
				'sorry no data dude'
			)}
		</div>
	);
};

export default CityDetails;
