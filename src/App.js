import "./App.css";
import { useState, useEffect } from "react";
import Recipe from "./components/Recipe";
import SearchBar from "./components/searchBar";
import "bootstrap/dist/css/bootstrap.css";

const APP_ID = "69469acb";
const APP_KEY = "0ca5a8954cdec00d524906aa13e74756";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("chicken");

  async function getRecipes() {
    const recipes = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await recipes.json();
    setRecipe(data.hits);
    console.log(recipe);
  }

  function handleSearch(searchWord, e) {
    setSearch(searchWord);
  }

  useEffect(() => {
    getRecipes();
  }, [search]);

  function NoResultFound() {
    return (
      <div className="container flex-column justify-content-center">
        <SearchBar onSearch={handleSearch} />
        <h3> No results Found </h3>
        <h5> check your internet connection or try differnt recipe </h5>
      </div>
    );
  }

  function Page() {
    return (
      <div className="App .container-fluid d-flex flex-column align-items-center">
        <SearchBar onSearch={handleSearch} />
        <div className="row d-flex justify-content-center mt-3">
          {recipe.map((rcp, index) => (
            <Recipe recipe={rcp.recipe} key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (!recipe.length) {
    return <NoResultFound />;
  } else {
    return <Page />;
  }
}
export default App;
