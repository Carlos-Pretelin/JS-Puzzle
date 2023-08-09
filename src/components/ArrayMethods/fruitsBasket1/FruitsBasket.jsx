import React, { useState } from 'react'
import NewFruits from './NewFruits/NewFruits';

const FruitsBasket = () => {

  const [fruits, setFruits] = useState([])

  const addFruits = (fruit) => {
    setFruits([...fruits, fruit]); // Use the setFruits function to update the state
}

  return (
    <div>
    <h1>Array Methods Practice</h1>

    <p>
        push() and pop()
        Exercise: Create an empty array. Use push() to add three different fruit names to the array. 
        Then, use pop() to remove the last fruit from the array. Print the array after each operation.
    </p>

    <button
    onClick={() => addFruits("Banana")}
    >Banana</button>

    <h1>Fruits Basket :</h1>

    {fruits.map( (item, index) => (
        <h1 key={index}>{item}</h1>
    ))}


    <NewFruits/>


</div>
  )
}

export default FruitsBasket