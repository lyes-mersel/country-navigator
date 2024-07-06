import { useState } from "react";

import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import "./SearchFilterBars.css";

const SearchFilterBars = (props) => {
	const [name, setName] = useState("");
	const [region, setRegion] = useState("Filter by Region");

	return (
		<section className="search-filter-bars">
			<SearchBar
				name={name}
				setName={setName}
				region={region}
				setRegion={setRegion}
				searchByName={props.searchByName}
				searchByRegion={props.searchByRegion}
				setCurrentPage={props.setCurrentPage}
			/>
			<FilterBar
				region={region}
				setRegion={setRegion}
				searchByRegion={props.searchByRegion}
				setName={setName}
				setCurrentPage={props.setCurrentPage}
			/>
		</section>
	);
};

export default SearchFilterBars;
