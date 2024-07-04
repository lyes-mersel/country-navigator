import Pagination from "@mui/material/Pagination";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./pagination.css";
import { useGlobalContext } from "../hooks/useGlobalContext";
import useScreenSize from "../hooks/useScreenSize";

export default function PaginationOutlined({
	totalPages,
	currentPage,
	setCurrentPage,
}) {
	const { mode } = useGlobalContext();
	const screenSize = useScreenSize();

	const handleChangePage = (evt, val) => {
		setCurrentPage(val);
	};

	const theme = createTheme({
		palette: {
			mode: mode,
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Pagination
				className="pagination"
				size={screenSize.width < 425 ? "small" : "medium"}
				count={totalPages}
				page={currentPage}
				variant="outlined"
				onChange={handleChangePage}
			/>
		</ThemeProvider>
	);
}
