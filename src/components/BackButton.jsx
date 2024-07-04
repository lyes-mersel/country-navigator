import { useNavigate } from "react-router-dom";
import MyFaArrowLeftLong from "../components/MyFaArrowLeftLong";

import "./BackButton.css";

const BackButton = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/");
	};

	return (
		<button
			className="btn back-button cursor-pointer scale-effect-02"
			onClick={handleClick}
		>
			<MyFaArrowLeftLong />
			Back
		</button>
	);
};

export default BackButton;
