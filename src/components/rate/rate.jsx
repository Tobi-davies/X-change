import React, { useState, useEffect } from "react";

const Rate = () => {
  const [currency, setCurrency] = useState("");
  console.log(currency);

  useEffect(() => {
    fetchData();
    // console.log(currency);
    // eslint-disable-next-line
  }, []);

  const fetchData = () => {
    fetch(
      "https://v6.exchangerate-api.com/v6/ec9549775e7b40e2dca40de6/latest/CAD"
    )
      .then((response) => response.json())
      .then((data) => setCurrency(data))
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="container
    "
    ></div>
  );
};

export default Rate;
