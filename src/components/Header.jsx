import { FaMoon, FaRegMoon } from "react-icons/fa";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { mode, dispatch } = useGlobalContext();

	const toggleMode = () => {
		const resverse = { light: "dark", dark: "light" };
		dispatch({ type: "SET_MODE", payload: resverse[mode] });
		localStorage.setItem("mode", resverse[mode]);
	};

	const goToHomePage = () => {
		if (location.pathname === "/") {
			navigate(0);
		} else {
			navigate("/");
		}
	};

	return (
		<header>
			<h1 className="cursor-pointer" onClick={goToHomePage}>
				Where in the world?
			</h1>
			<button className="btn cursor-pointer" onClick={toggleMode}>
				{mode == "dark" ? (
					<FaMoon id="moon-icon" />
				) : (
					<FaRegMoon id="moon-icon" />
				)}
				{mode == "dark" ? "Light Mode" : "Dark Mode"}
			</button>
		</header>
	);
};

export default Header;
