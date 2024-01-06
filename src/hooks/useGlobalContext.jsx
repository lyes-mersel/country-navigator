import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useGlobalContext = () => {
	const context = useContext(GlobalContext);

	if (!context) {
		throw Error(
			"useGlobalContext must be used inside a GlobalContextProvider"
		);
	}

	return context;
};
