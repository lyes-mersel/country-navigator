import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContext, ThemeContextProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	</React.StrictMode>
);
