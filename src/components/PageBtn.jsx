const PageBtn = (props) => {
	return (
		<button
			className="btn scale-effect-1 cursor-pointer"
			onClick={() => props.setCurrentPage(props.pageNumber)}
		>
			{props.pageNumber}
		</button>
	);
};
export default PageBtn;
