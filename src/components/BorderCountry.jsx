import { useEffect, useState } from "react";

const BorderCountry = (props) => {
	const { code } = props;
	const [name, setName] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://restcountries.com/v3.1/alpha/${code}?fields=name`
			);
			if (response.ok) {
				const data = await response.json();
				setName(data.name.common);
			}
		};
		fetchData();
	}, []);

	return <span className="border-country">{name}</span>;
};

export default BorderCountry;
