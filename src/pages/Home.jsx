import Card from "../components/Card";

const Home = (props) => {
	return (
		<main className="home-page">
			{props.countries.map((country) => (
				<Card key={country.id} info={country} />
			))}
		</main>
	);
};

export default Home;
