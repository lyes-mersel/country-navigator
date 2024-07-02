import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DetailsPage.css";

import CountryDetails from "../components/CountryDetails";
import CircularIndeterminate from "../components/CircularIndeterminate";
import BackButton from "../components/BackButton";

const DetailsPage = () => {
	const navigate = useNavigate();
	const { countryCode } = useParams();
	const [countryInfo, setCountryInfo] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://restcountries.com/v3.1/alpha?codes=" + countryCode
			);
			if (response.ok) {
				const data = await response.json();
				setCountryInfo(data[0]);
			} else {
				navigate("/", { replace: true });
			}
		};
		fetchData();
	}, [countryCode, setCountryInfo, navigate]);

	return (
		<main className="details-page">
			<BackButton />
			{JSON.stringify(countryInfo) === JSON.stringify({}) ? (
				<CircularIndeterminate />
			) : (
				<CountryDetails countryInfo={countryInfo} />
			)}
		</main>
	);
};

export default DetailsPage;
