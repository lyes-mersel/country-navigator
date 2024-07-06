import React, { useRef, useEffect } from "react";

const OutsideClickHandler = ({ children, onOutsideClick }) => {
	const ref = useRef(null);

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			onOutsideClick();
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return <div ref={ref}>{children}</div>;
};

export default OutsideClickHandler;
