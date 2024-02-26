import Card from "../components/Card";

const CountriesList = (props) => {
	return (
		<div className="countries-list">
			{props.countries.map((country) => (
				<Card key={country.cca2} info={country} />
			))}
		</div>
	);
};

export default CountriesList;
