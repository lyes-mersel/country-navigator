import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

export const themeReducer = (state, action) => {
	switch (action.type) {
		case "SET_LIGHT_MODE":
			return {
				theme: "light",
			};
		case "SET_DARK_MODE":
			return {
				theme: "dark",
			};
		default:
			return state;
	}
};

export const ThemeContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(themeReducer, { theme: "light" });

	return (
		<ThemeContext.Provider value={{ ...state, dispatch }}>
			{children}
		</ThemeContext.Provider>
	);
};
