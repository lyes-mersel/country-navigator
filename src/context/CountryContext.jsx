import { createContext, useReducer } from "react";

export const CountryContext = createContext();

export const countryReducer = (state, action) => {
	switch (action.type) {
		case "SET_COUNTRY":
			return {
				code: action.payload,
			};
		case "DELETE_COUNTRY":
			return {
				code: "",
			};
		default:
			return state;
	}
};

export const CountryContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(countryReducer, { code: "" });

	return (
		<CountryContext.Provider value={{ ...state, dispatch }}>
			{children}
		</CountryContext.Provider>
	);
};
