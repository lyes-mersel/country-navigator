import { FaMoon, FaRegMoon } from "react-icons/fa";
import { useThemeContext } from "../hooks/useThemeContext";

const Header = () => {
	const { theme, dispatch } = useThemeContext();

	const toggleTheme = () => {
		switch (theme) {
			case "light":
				dispatch({ type: "SET_DARK_MODE" });
				break;
			case "dark":
				dispatch({ type: "SET_LIGHT_MODE" });
				break;
			default:
				dispatch({ type: "SET_LIGHT_MODE" });
				break;
		}
	};

	return (
		<>
			<header>
				<h1>Where in the world?</h1>
				<button onClick={toggleTheme}>
					{theme == "dark" ? (
						<FaMoon id="moon-icon" />
					) : (
						<FaRegMoon id="moon-icon" />
					)}
					{theme == "dark" ? "Light Mode" : "Dark Mode"}
				</button>
			</header>
		</>
	);
};

export default Header;
