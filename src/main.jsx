import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { CountryContextProvider } from "./context/CountryContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<CountryContextProvider>
				<App />
			</CountryContextProvider>
		</ThemeContextProvider>
	</React.StrictMode>
);
