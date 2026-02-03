import React, { useState, useEffect } from "react";
import style from "./search.module.css";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
    // alert(searchText);
  };

  useEffect(() => { 
    props.onSearch(searchText);
  }, [searchText]);

  return (
    <div style={{ textAlign: "center" }}>
      <input type="text" placeholder="Search Country" value={searchText} onChange={handleChange} className={style["search-input"]}/>
    </div>
  );
};

export default Search
