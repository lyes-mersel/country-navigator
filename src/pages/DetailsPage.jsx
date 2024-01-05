import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

import CountryDetails from "../components/CountryDetails";
import CircularIndeterminate from "../components/CircularIndeterminate";
import { useCountryContext } from "../hooks/useCountryContext";

const DetailsPage = (props) => {
	const [countryInfo, setCountryInfo] = useState({});
	const { dispatch } = useCountryContext();

	const handleClick = () => {
		dispatch({ type: "DELETE_COUNTRY" });
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://restcountries.com/v3.1/alpha?codes=" + props.countryCode
			);
			const data = await response.json();
			setCountryInfo(data[0]);
		};
		fetchData();
	}, []);

	return (
		<main className="details-page">
			<button onClick={handleClick}>
				<FaLongArrowAltLeft />
				Back
			</button>
			{JSON.stringify(countryInfo) === JSON.stringify({}) ? (
				<CircularIndeterminate />
			) : (
				<CountryDetails countryInfo={countryInfo} />
			)}
		</main>
	);
};

export default DetailsPage;
