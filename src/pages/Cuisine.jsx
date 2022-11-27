import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = "6d82bd03028d4832aa3f49e0e57169e6";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const param = useParams();

  const fetchCuisine = async (name) => {
    // const check = localStorage.getItem("popular");
    // if (check) {
    //   setPopular(JSON.parse(check));
    // } else {

    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}`
    );

    const data = await api.json();
    //   localStorage.setItem("popular", JSON.stringify(data.recipes));
    setCuisine(data.results);
  };
  useEffect(() => {
    fetchCuisine(param.type);
  }, [param.type]);
  console.log(cuisine);

  return (
    <div className="grid">
      {cuisine.map((item) => (
        <div className="cuisineCard">
          <img src={item.image} alt="" />
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Cuisine;
