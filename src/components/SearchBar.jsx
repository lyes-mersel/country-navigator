import { useState } from "react";
import { MdSearch } from "react-icons/md";

import "./SearchBar.css";

const SearchBar = (props) => {
	const [name, setName] = useState("");

	const searchCountry = (event) => {
		event.preventDefault();
		props.setCurrentPage(1);
		name !== "" ? props.searchByName(name) : null;
	};

	return (
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
	);
};

export default SearchBar;
