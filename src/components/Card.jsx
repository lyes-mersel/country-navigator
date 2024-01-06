import { useNavigate } from "react-router-dom";

function Card(props) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/" + props.info.cca2);
	};

	return (
		<div className="card" onClick={handleClick}>
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
