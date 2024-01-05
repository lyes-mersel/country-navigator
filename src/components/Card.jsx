import { useEffect, useState } from "react";

function Card(props) {
	// const [name, setName] = useState("");
	// const [flag, setFlag] = useState("");
	// const [population, setPopulation] = useState("");
	// const [region, setRegion] = useState("");
	// const [capital, setCapital] = useState("");

	// useEffect(() => {
	// 	async function fetchData() {
	// 		const response = await fetch(props.url);
	// 		const data = await response.json();
	// 		if (response.ok) {
	// 			setFlag(data[0].flags);
	// 			setName(data[0].name.common);
	// 			setPopulation(data[0].population);
	// 			setRegion(data[0].region);
	// 			setCapital(data[0].capital);
	// 		}
	// 	}
	// 	fetchData();
	// }, [setFlag, setName, setPopulation, setCapital]);

	return (
		<div className="card">
			<img src={props.info.flag.png} alt={props.info.flag.alt} />
			<div className="info">
				<h2>{props.info.name}</h2>
				<span>
					<strong>Population: </strong>
					{props.info.population}
				</span>
				<span>
					<strong>Region: </strong>
					{props.info.region}
				</span>
				<span>
					<strong>Capital: </strong>
					{props.info.capital}
				</span>
			</div>
		</div>
	);
}

export default Card;
