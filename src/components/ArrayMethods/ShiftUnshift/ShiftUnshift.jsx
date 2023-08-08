import React, { useState } from 'react'

const ShiftUnshift = () => {
    const citiesArray = ["Veracruz", "Tierra Blanca", "CDMX"]
    
    const [inputValue, setInputValue] = useState("")

    const [cities, setCities] = useState(citiesArray)

    



    
    const onInputValueChange= (e) => {
        const value = e.target.value;

        setInputValue(value)
        //console.log(value)
    }   





    const removeCity = (array) => {
        let newArray = array.shift()

        console.log(newArray)
        console.log(citiesArray)
    }

    const addCity = (newCity) => {

        setCities([...cities, newCity])
        
        console.log(cities)
    }



  return (
    <div className='method-item'>


        {/* INSTRUCCIONS */}
        <h3>
            shift() and unshift()
            Exercise: Create an array with three different city names. 
            Use shift() to remove the first city from the array, and then use unshift() to add a new city at the beginning. 
            Print the array after each operation.
        </h3>

        <h4>Then Add an Input So the user can insert a string, and add that to the array</h4>



        <input 
        placeholder='Write the name of a City'
        value={inputValue}
        onChange={onInputValueChange}
        type="text" />


       
        
        <button
        onClick={() => removeCity(citiesArray)}
        >Remove City</button>

        <button
        onClick={() => addCity(inputValue)}
        >Add City</button>


        {cities.map(item => (
            <h1>{item}</h1>
        ))}
        
    </div>
  )
}

export default ShiftUnshift