import { useEffect, useState } from "react";
import { useThemeContext } from "./hooks/useThemeContext";

import Home from "./pages/Home";
import Header from "./components/Header";
import DetailsPage from "./pages/Details";

function App() {
	const MAX_COUNTRIES_PAGE = 16;

	const [pageNumber, setPageNumber] = useState(0);
	const [countries, setCountries] = useState([[]]);

	const { theme } = useThemeContext();

	useEffect(() => {
		async function fetchData() {
			const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca2");
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
						id: indexCountry,
						name: country.name.common,
						flag: country.flags,
						population: country.population,
						region: country.region,
						capital: country.capital,
					};
					countriesList[indexGroup].push(countryInfos);
				});
				setCountries(countriesList);
			}
		}
		fetchData();
	}, []);

	return (
		<div className="App" id={theme}>
			<Header />
			{/* <Home countries={countries[pageNumber]} /> */}
			<DetailsPage countryCode={"dz"} />
		</div>
	);
}

export default App;
