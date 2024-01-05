import Card from "../components/Card";

const HomePage = (props) => {
	return (
		<main className="home-page">
			{props.countries.map((country) => (
				<Card key={country.cca2} info={country} />
			))}
		</main>
	);
};

export default HomePage;
