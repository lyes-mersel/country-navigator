import BorderCountry from "./BorderCountry";
import "./CountryDetails.css";

const CountryDetails = (props) => {
	return (
		<section className="country-details">
			<img
				src={props.countryInfo.flags.png}
				alt={props.countryInfo.flags.alt}
			/>
			<div className="country-details-infos">
				<h2>{props.countryInfo.name.common}</h2>
				<div>
					<dl className="country-details-left">
						<dt>Native Names:</dt>
						<dd>
							{Object.values(props.countryInfo.name.nativeName).map(
								(name, index, array) =>
									index != array.length - 1
										? name.common + ", "
										: name.common
							)}
						</dd>
						<dt>Population:</dt>
						<dd>{props.countryInfo.population}</dd>
						<dt>Region:</dt>
						<dd>{props.countryInfo.region}</dd>
						<dt>Sub Region:</dt>
						<dd>{props.countryInfo.subregion}</dd>
						<dt>Capital:</dt>
						<dd>{props.countryInfo.capital}</dd>
					</dl>

					<dl className="country-details-right">
						<dt>Top Level Domains:</dt>
						<dd>
							{props.countryInfo.tld.map((tld, index, array) =>
								index != array.length - 1 ? tld + ", " : tld
							)}
						</dd>
						<dt>Currencies:</dt>
						<dd>
							{Object.values(props.countryInfo.currencies).map(
								(currency, index, array) =>
									index != array.length - 1
										? currency.name + ", "
										: currency.name
							)}
						</dd>
						<dt>Languages:</dt>
						<dd>
							{Object.values(props.countryInfo.languages).map(
								(language, index, array) =>
									index != array.length - 1
										? language + ", "
										: language
							)}
						</dd>
					</dl>
				</div>

				<dl className="country-details-bottom borders-sm-lg-screen">
					<dt>Border Countries:</dt>
					<dd>
						{"borders" in props.countryInfo ? (
							Object.values(props.countryInfo.borders).map(
								(borderCountry, index) => (
									<BorderCountry key={index} code={borderCountry} />
								)
							)
						) : (
							<>0</>
						)}
					</dd>
				</dl>
			</div>
			<dl className="country-details-bottom borders-md-screen">
				<dt>Border Countries:</dt>
				<dd>
					{"borders" in props.countryInfo ? (
						Object.values(props.countryInfo.borders).map(
							(borderCountry, index) => (
								<BorderCountry key={index} code={borderCountry} />
							)
						)
					) : (
						<>0</>
					)}
				</dd>
			</dl>
		</section>
	);
};

export default CountryDetails;
