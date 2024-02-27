import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BorderCountry = (props) => {
	const { code } = props;
	const navigate = useNavigate();
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
	}, [code, setName]);

	return (
		<button className="border-country" onClick={() => navigate("/" + code)}>
			{name}
		</button>
	);
};

export default BorderCountry;
