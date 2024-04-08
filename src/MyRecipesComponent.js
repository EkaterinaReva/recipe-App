function MyRecipesComponent({label, image,calories,ingredients,dishType}) {
    return(
        <div>
            <div className="container">
            <h2>{label}</h2></div>

            <div className="container">
            <p>{dishType}</p></div>

        <div className="container">
            <img src={image} alt="dishes"/>
            </div>
            
<ul className="container list">
    {ingredients.map((ingredient, index) =>(
        <li key={index}>
            {ingredient}</li>
    ))}
</ul>
           

            <div className="container">
            <p>{calories.toFixed()} calories</p>
            </div>
            
        </div>
    )
}

export default MyRecipesComponent;