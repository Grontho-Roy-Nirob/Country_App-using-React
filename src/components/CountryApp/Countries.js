import React from "react";
import Country from "./Country";
import style from "./countries.module.css";

const Countries = (props) => {
  return (
    <section className={style.countries}>
      {props.countries.map((country) => (
        <Country
          key={country.name.common}
          country={country}
          onRemoveCountry={props.onRemoveCountry}
        />
      ))}
    </section>
  );
};

export default Countries;
