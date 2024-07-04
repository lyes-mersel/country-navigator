import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./BorderCountry.css";

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
		<button
			className="btn border-country cursor-pointer scale-effect-02"
			onClick={() => navigate("/" + code)}
		>
			{name}
		</button>
	);
};

export default BorderCountry;
