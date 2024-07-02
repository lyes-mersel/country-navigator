import "./SelectPage.css";
import PageBtn from "./PageBtn";

const SelectPage = (props) => {
	return (
		<section className="select-page">
			{props.countries.map((page, index) => (
				<PageBtn
					key={index}
					pageNumber={index + 1}
					setPageNumber={props.setPageNumber}
				/>
			))}
		</section>
	);
};

export default SelectPage;
