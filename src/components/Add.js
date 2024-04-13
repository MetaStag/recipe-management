import { useState } from "react"

const Add = () => {
    const initialFormState = {
        'name': '',
        'recipe': '',
        'author': ''
    }
    const [recipe, setRecipe] = useState(initialFormState)

    const handleChange = (e) => {
        const {name, value} = e.target
        setRecipe({...recipe, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('/api/recipe', {
            method: 'POST',
            headers : {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
        setRecipe(initialFormState)
        document.getElementById('name').value = ''
        document.getElementById('recipe').value = ''
        document.getElementById('author').value = ''
    }

    return (
        <div className="bg-[#f1f083] m-auto w-3/6 p-3 mt-16 justify-center flex flex-col items-center">
            <p className="text-2xl">Add Recipe</p>
            <p className="mt-3 text-lg">Recipe name</p>
            <input type="text" name="name" id="name" onChange={handleChange} className="rounded-lg mb-3 p-3"/>
            <p className="text-lg">Recipe</p>
            <textarea type="text" name="recipe" id="recipe" onChange={handleChange} className="rounded-lg mb-3 h-500 w-3/6 p-3"/>
            <p className="text-lg">Author</p>
            <input type="text" name="author" id="author" onChange={handleChange} className="rounded-lg mb-3 p-3"/>
            <button onClick={handleSubmit} className="bg-[#FFCD44] rounded-lg px-4 py-2">Submit</button>
        </div>
    )
}

export default Add