import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const SearchFilterBars = (props) => {
	const [name, setName] = useState("");
	const [region, setRegion] = useState("Filter by Region");
	const [hideRegions, setHideRegions] = useState(true);

	const searchCountry = (event) => {
		event.preventDefault();
		name !== "" ? props.searchByName(name) : null;
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
		<div className="search-filter-bars">
			<form className="search-bar" onSubmit={searchCountry}>
				<span>
					<MdSearch />
				</span>
				<input
					type="text"
					placeholder="Search for a country..."
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</form>
			<div className="filter-bar">
				<button onClick={showHideRegions}>
					{region}
					<span>
						<IoIosArrowDown />
					</span>
				</button>
				<div className={hideRegions ? "hide" : ""}>
					<button onClick={setRegionAll}>All</button>
					<button onClick={setRegionAfrica}>Africa</button>
					<button onClick={setRegionAmerica}>America</button>
					<button onClick={setRegionAsia}>Asia</button>
					<button onClick={setRegionEurope}>Europe</button>
					<button onClick={setRegionOceania}>Oceania</button>
				</div>
			</div>
		</div>
	);
};

export default SearchFilterBars;
