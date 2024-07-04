import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import "./SearchFilterBars.css";

const SearchFilterBars = (props) => {
	return (
		<section className="search-filter-bars">
			<SearchBar
				searchByName={props.searchByName}
				setCurrentPage={props.setCurrentPage}
			/>
			<FilterBar
				searchByRegion={props.searchByRegion}
				setCurrentPage={props.setCurrentPage}
			/>
		</section>
	);
};

export default SearchFilterBars;
