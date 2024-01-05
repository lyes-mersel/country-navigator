import { useEffect } from "react";

const DetailsPage = (props) => {
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://restcountries.com/v3.1/alpha?codes=" + props.countryCode
			);
			const data = await response.json();
			console.log(data);
		};
		fetchData();
	}, []);
	return <>details page</>;
};

export default DetailsPage;
