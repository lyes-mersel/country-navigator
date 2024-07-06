import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import "./FilterBar.css";
import OutsideClickHandler from "./OutsideClickHandler";

const FilterBar = ({
	region,
	setRegion,
	searchByRegion,
	setName,
	setCurrentPage,
}) => {
	const [regionsVisible, setRegionsVisible] = useState(false);

	const showRegions = () => {
		setRegionsVisible(true);
	};
	const hideRegions = () => {
		setRegionsVisible(false);
	};

	const handleRequestSearchByRegion = (e, region) => {
		e.preventDefault();
		setRegion(region);
		hideRegions();
		setName("");
		setCurrentPage(1);
		region === "All" ? searchByRegion("") : searchByRegion(region);
	};

	return (
		<form className="filter-bar">
			<button
				type="button"
				className="btn cursor-pointer"
				onClick={showRegions}
			>
				{region}
				<span>
					<IoIosArrowDown />
				</span>
			</button>
			{regionsVisible && (
				<OutsideClickHandler onOutsideClick={hideRegions}>
					<button
						className="btn cursor-pointer"
						onClick={(e) => handleRequestSearchByRegion(e, "All")}
					>
						All
					</button>
					<button
						className="btn cursor-pointer"
						onClick={(e) => handleRequestSearchByRegion(e, "Africa")}
					>
						Africa
					</button>
					<button
						className="btn cursor-pointer"
						onClick={(e) => handleRequestSearchByRegion(e, "America")}
					>
						America
					</button>
					<button
						className="btn cursor-pointer"
						onClick={(e) => handleRequestSearchByRegion(e, "Asia")}
					>
						Asia
					</button>
					<button
						className="btn cursor-pointer"
						onClick={(e) => handleRequestSearchByRegion(e, "Europe")}
					>
						Europe
					</button>
					<button
						className="btn cursor-pointer"
						onClick={(e) => handleRequestSearchByRegion(e, "Oceania")}
					>
						Oceania
					</button>
				</OutsideClickHandler>
			)}
		</form>
	);
};

export default FilterBar;
