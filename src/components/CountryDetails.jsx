import BorderCountry from "./BorderCountry";

const CountryDetails = (props) => {
	return (
		<section className="details-section">
			<img
				src={props.countryInfo.flags.png}
				alt={props.countryInfo.flags.alt}
			/>
			<div>
				<h2>{props.countryInfo.name.common}</h2>
				<dl>
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
								index != array.length - 1 ? language + ", " : language
						)}
					</dd>
					<dt>Border Countries:</dt>
					<dd>
						{Object.values(props.countryInfo.borders).map(
							(borderCountry, index) => (
								<BorderCountry key={index} code={borderCountry} />
							)
						)}
					</dd>
				</dl>
			</div>
		</section>
	);
};

export default CountryDetails;
