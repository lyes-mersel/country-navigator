import { MdSearch } from "react-icons/md";

import "./SearchBar.css";

const SearchBar = ({
	name,
	setName,
	region,
	setRegion,
	setCurrentPage,
	searchByName,
	searchByRegion,
}) => {
	const searchCountry = (event) => {
		event.preventDefault();
		setCurrentPage(1);
		let trimmedName = name.trim(); // remove the all spaces from the beginnig and the end
		trimmedName = trimmedName.replace(/\s+/g, " "); // remove all the doubled spaces
		setName(trimmedName);
		region !== "Filter by Region" ? setRegion("Filter by Region") : null;
		trimmedName !== "" ? searchByName(trimmedName) : searchByRegion("");
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
