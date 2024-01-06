import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

export const globalReducer = (state, action) => {
	switch (action.type) {
		case "SET_MODE":
			return {
				mode: action.payload,
			};
		default:
			return state;
	}
};

export const GlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(globalReducer, { mode: "light" });

	useEffect(() => {
		const mode = localStorage.getItem("mode");
		if (mode) {
			dispatch({ type: "SET_MODE", payload: mode });
		}
	}, []);

	return (
		<GlobalContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GlobalContext.Provider>
	);
};
