import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

import CountryDetails from "../components/CountryDetails";
import CircularIndeterminate from "../components/CircularIndeterminate";

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
			<div className="back-button" onClick={handleClick}>
				<span className="arrow-left-icon">
					<FaArrowLeftLong />
				</span>
				Back
			</div>
			{JSON.stringify(countryInfo) === JSON.stringify({}) ? (
				<div className="circular-indeterminate">
					<CircularIndeterminate />
				</div>
			) : (
				<CountryDetails countryInfo={countryInfo} />
			)}
		</main>
	);
};

export default DetailsPage;
