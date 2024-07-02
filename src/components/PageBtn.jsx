const PageBtn = (props) => {
	return (
		<button
			className="scale-effect-1 cursor-pointer"
			onClick={() => props.setPageNumber(props.pageNumber)}
		>
			{props.pageNumber}
		</button>
	);
};
export default PageBtn;
