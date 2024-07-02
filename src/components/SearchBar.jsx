import { MdSearch } from "react-icons/md";

import "./SearchBar.css";

const SearchBar = (props) => {
	return (
		<form className="search-bar" onSubmit={props.searchCountry}>
			<span>
				<MdSearch />
			</span>
			<input
				type="text"
				placeholder="Search for a country..."
				value={props.name}
				onChange={(e) => {
					props.setName(e.target.value);
				}}
			/>
		</form>
	);
};

export default SearchBar;
