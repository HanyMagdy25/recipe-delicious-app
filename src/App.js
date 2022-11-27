import React from "react";
import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";

import Pages from "./pages/Pages";

// const API_Key = "6d82bd03028d4832aa3f49e0e57169e6";
// const base_url = "https://api.spoonacular.com/recipes/complexSearch";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
