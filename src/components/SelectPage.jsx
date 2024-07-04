import "./SelectPage.css";
import PageBtn from "./PageBtn";

const SelectPage = (props) => {
	return (
		<section className="select-page">
			{Array.from({ length: props.totalPages }, (_, index) => (
				<PageBtn
					key={index}
					pageNumber={index + 1}
					setCurrentPage={props.setCurrentPage}
				/>
			))}
		</section>
	);
};

export default SelectPage;
