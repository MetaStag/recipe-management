import { useEffect, useState } from "react"

const Browse = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('/api/recipes')
        .then(response => response.json())
        .then(data => setRecipes(data))
    },[])
// 
    return (
        <div className="bg-[#f1f083] m-auto w-2/3 p-3 mt-16 justify-center flex flex-row flex-wrap items-center">
        {recipes.map(recipe =>
        <div className="border-[#98724F] border-2 rounded-lg flex-col justify-center items-center h-100 w-1/4 px-5 py-3 m-3">
            <p className="text-lg text-[#FF0000] font-bold">{recipe.name}</p>
            <p className="whitespace-pre-line">{recipe.recipe}</p>
            <p className="text-[#58391e]">By {recipe.author}</p>
        </div>
            )}
        </div>
    )
}

export default Browse