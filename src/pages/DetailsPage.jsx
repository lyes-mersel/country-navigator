import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CountryDetails from "../components/CountryDetails";
import MyCircularIndeterminate from "../components/MyCircularIndeterminate";
import MyFaArrowLeftLong from "../components/MyFaArrowLeftLong";

const DetailsPage = () => {
	const navigate = useNavigate();
	const { countryCode } = useParams();
	const [countryInfo, setCountryInfo] = useState({});

	const handleClick = () => {
		navigate("/");
	};

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
	}, []);

	return (
		<main className="details-page">
			<button className="back-button" onClick={handleClick}>
				<MyFaArrowLeftLong />
				Back
			</button>
			{JSON.stringify(countryInfo) === JSON.stringify({}) ? (
				<MyCircularIndeterminate />
			) : (
				<CountryDetails countryInfo={countryInfo} />
			)}
		</main>
	);
};

export default DetailsPage;
