import { useState, useEffect } from "react";

import Card from "../components/Card";
import CircularIndeterminate from "../components/CircularIndeterminate";

const HomePage = () => {
	const MAX_COUNTRIES_PAGE = 16;

	const [countries, setCountries] = useState([[]]);
	const [pageNumber, setPageNumber] = useState(0);
	const [dataFetched, setDataFetched] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				"https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca2"
			);
			const data = await response.json();
			if (response.ok) {
				let countriesList = [];
				let indexGroup = -1;
				data.forEach((country, indexCountry) => {
					if (indexCountry % MAX_COUNTRIES_PAGE === 0) {
						indexGroup++;
						countriesList[indexGroup] = [];
					}
					const countryInfos = {
						name: country.name.common,
						flag: country.flags,
						population: country.population,
						region: country.region,
						capital: country.capital,
						cca2: country.cca2,
					};
					countriesList[indexGroup].push(countryInfos);
				});
				setCountries(countriesList);
				setDataFetched(true);
			}
		}
		fetchData();
	}, []);

	return (
		<main className="home-page">
			{!dataFetched ? (
				<CircularIndeterminate />
			) : (
				countries[pageNumber].map((country) => (
					<Card key={country.cca2} info={country} />
				))
			)}
		</main>
	);
};

export default HomePage;
