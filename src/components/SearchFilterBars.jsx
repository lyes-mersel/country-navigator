import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import "./SearchFilterBars.css";

const SearchFilterBars = (props) => {
	return (
		<section className="search-filter-bars">
			<SearchBar searchByName={props.searchByName} />
			<FilterBar searchByRegion={props.searchByRegion} />
		</section>
	);
};

export default SearchFilterBars;
