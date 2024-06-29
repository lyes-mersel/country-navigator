import "./SelectPage.css";

const SelectPage = (props) => {
	return (
		<div className="select-page">
			<button onClick={() => props.goto(props.nb)}>{props.nb}</button>
		</div>
	);
};

export default SelectPage;
