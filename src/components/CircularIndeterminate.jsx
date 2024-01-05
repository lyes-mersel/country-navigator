import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CircularIndeterminate = () => {
	return (
		<Box sx={{ display: "flex" }}>
			<CircularProgress />
		</Box>
	);
};

export default CircularIndeterminate;
