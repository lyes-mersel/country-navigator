import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import DetailsPage from "./pages/DetailsPage";
import { useGlobalContext } from "./hooks/useGlobalContext";

function App() {
	const { mode } = useGlobalContext();

	return (
		<div className="App" id={mode}>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path=":countryCode" element={<DetailsPage />} />
				</Routes>
			</BrowserRouter>

			{/* {!dataFetched ? (
				<CircularIndeterminate />
			) : !countryCode ? (
				<HomePage countries={countries[pageNumber]} />
			) : (
				<DetailsPage countryCode={countryCode} />
			)} */}
		</div>
	);
}

export default App;
