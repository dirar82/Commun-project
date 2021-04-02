import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../Component/Principal.css";

const Principal = () => {
  const [data, setdata] = useState();
  const getData = async () => {
    const response = await axios.get("https://restcountries.eu/rest/v2/all");
    setdata(response.data);
    console.log("inside");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={"component"}>
      {data ? (
        data.map((elem) => (
          <div className="comp">
            <img src={elem.flag} alt="flag" />
            <span> {elem.name} </span>
            <span> {elem.population} </span>
            <span> {elem.region} </span>
            <span> {elem.capital}</span>
          </div>
        ))
      ) : (
        <button onClick={getData}>get</button>
      )}
    </div>
  );
};

export default Principal;
