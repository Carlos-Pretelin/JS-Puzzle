import React, { useState } from 'react'

const NewFruits = () => {


    const [inputValue, setInputValue] = useState("")

    const [fruits, setFruits] = useState([])

    const onInputValueChange = (e) => {
        const value = e.target.value

        setInputValue(value)
        //console.log(value)
    }

    const onAdd = (newItem) => {
        setFruits([...fruits, newItem])
        setInputValue("")
    }
  return (
    <div>
        <h1>New Fruits App:</h1>


        <p>1. Write a Program that shows a basket of fruits. Add an input and a button to add new items to the basket</p>


        <input 
        placeholder='Write the name of a Fruit'
        value={inputValue}
        onChange={onInputValueChange}
        type="text" />

        <button
        onClick={() => onAdd(inputValue)}
        >Add</button>

        {fruits.map( (item, index) => (

            <div>
                <h1 key={index}>{item}</h1>
            </div>
            
        ))}

    </div>
  )
}

export default NewFruits