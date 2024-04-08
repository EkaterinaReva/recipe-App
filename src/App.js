
import { useEffect, useState } from 'react';
import video from "./food.mp4";
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

const MY_ID = "e2b9519e";
const MY_KEY= "e58ea15489f6042f01f61159eaa6791d";

const [mySearch, setMySearch] = useState("");
const[myRecipes,setMyRecipes] =useState([]);
const[wordSubmitted, setWordSubmitted] =useState("basil");

useEffect(() => {
  const getRecipe =async() =>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data =await response.json();
    setMyRecipes(data.hits);
    }
getRecipe()
},[wordSubmitted])

const myRecipeSearch= (e)=>{
setMySearch(e.target.value)
}

const finalSearch=(e) =>{
  e.preventDefault()
  setWordSubmitted(mySearch)
}

return (
    <div className="App">

      <div className="container">
        <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
</video>
        <h1>Find a recipe</h1>
      </div>
<div className="container">
  <form onSubmit={finalSearch}>
    <input className="search" placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/>
  </form>
</div>

{myRecipes.map((element, index) =>(
  <MyRecipesComponent key={index}
   label={element.recipe.label}
    image={element.recipe.image}
     calories={element.recipe.calories} 
     ingredients={element.recipe.ingredientLines}
     dishType={element.recipe.dishType}
     />
))}
</div>
  );
}
export default App;
