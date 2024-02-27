import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { useGlobalContext } from "./hooks/useGlobalContext";

function App() {
	const { mode } = useGlobalContext();

	return (
		<div className="App" id={mode}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/:countryCode" element={<DetailsPage />} />
					<Route path="*" element={<Navigate to={"/"} replace />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
