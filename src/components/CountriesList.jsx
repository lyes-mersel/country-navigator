import "./CountriesList.css";
import Card from "../components/Card";

const CountriesList = (props) => {
	return (
		<section className="countries-list">
			{props.countries.map((country) => (
				<Card key={country.cca2} info={country} />
			))}
		</section>
	);
};

export default CountriesList;
