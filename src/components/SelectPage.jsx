const SelectPage = (props) => {
	return <button onClick={() => props.goto(props.nb)}>{props.nb}</button>;
};

export default SelectPage;
