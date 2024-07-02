import { RxCrossCircled } from "react-icons/rx";

import "./NotFound.css";

const NotFound = () => {
	return (
		<div className="not-found">
			<RxCrossCircled />
			<span>Country NOT Found !</span>
		</div>
	);
};

export default NotFound;
