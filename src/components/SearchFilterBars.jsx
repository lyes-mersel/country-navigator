import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import "./SearchFilterBars.css";
import SearchBar from "./SearchBar";

const SearchFilterBars = (props) => {
	const [name, setName] = useState("");
	const [region, setRegion] = useState("Filter by Region");
	const [hideRegions, setHideRegions] = useState(true);

	const searchCountry = (event) => {
		event.preventDefault();
		props.name !== "" ? props.searchByName(name) : null;
	};

	const showHideRegions = () => {
		setHideRegions(!hideRegions);
	};

	const setRegionAll = () => {
		setRegion("All");
		setHideRegions(true);
		props.searchByRegion("");
	};

	const setRegionAfrica = () => {
		setRegion("Africa");
		setHideRegions(true);
		props.searchByRegion("Africa");
	};

	const setRegionAmerica = () => {
		setRegion("America");
		setHideRegions(true);
		props.searchByRegion("America");
	};

	const setRegionAsia = () => {
		setRegion("Asia");
		setHideRegions(true);
		props.searchByRegion("Asia");
	};

	const setRegionEurope = () => {
		setRegion("Europe");
		setHideRegions(true);
		props.searchByRegion("Europe");
	};

	const setRegionOceania = () => {
		setRegion("Oceania");
		setHideRegions(true);
		props.searchByRegion("Oceania");
	};

	return (
		<section className="search-filter-bars">
			<SearchBar
				name={name}
				setName={setName}
				searchCountry={searchCountry}
			/>
			<div className="filter-bar">
				<button className="cursor-pointer" onClick={showHideRegions}>
					{region}
					<span>
						<IoIosArrowDown />
					</span>
				</button>
				<div className={hideRegions ? "hide" : ""}>
					<button className="cursor-pointer" onClick={setRegionAfrica}>
						Africa
					</button>
					<button className="cursor-pointer" onClick={setRegionAmerica}>
						America
					</button>
					<button className="cursor-pointer" onClick={setRegionAsia}>
						Asia
					</button>
					<button className="cursor-pointer" onClick={setRegionAll}>
						All
					</button>
					<button className="cursor-pointer" onClick={setRegionEurope}>
						Europe
					</button>
					<button className="cursor-pointer" onClick={setRegionOceania}>
						Oceania
					</button>
				</div>
			</div>
		</section>
	);
};

export default SearchFilterBars;
