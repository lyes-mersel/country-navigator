import { FaMoon, FaRegMoon } from "react-icons/fa";
import { useGlobalContext } from "../hooks/useGlobalContext";

const Header = () => {
	const { mode, dispatch } = useGlobalContext();

	const toggleMode = () => {
		const resverse = { light: "dark", dark: "light" };
		dispatch({ type: "SET_MODE", payload: resverse[mode] });
		localStorage.setItem("mode", resverse[mode]);
	};

	return (
		<header>
			<h1>Where in the world?</h1>
			<button onClick={toggleMode}>
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
