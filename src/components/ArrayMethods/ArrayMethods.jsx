import React, {useEffect, useState} from 'react'

const ArrayMethods = () => {

  
    const EmptyArray = []

    const onAdd = () => {
        EmptyArray.push("Banana", "Apple", "Pear")
        console.log(EmptyArray)
    }

    const onRemove = () => {
        console.log(EmptyArray.pop())
        console.log(EmptyArray)
    }
  return (
    <div>
        <h1>Array Methods Practice</h1>

        <div className='method-item'>

            <p>
                push() and pop()
                Exercise: Create an empty array. Use push() to add three different fruit names to the array. 
                Then, use pop() to remove the last fruit from the array. Print the array after each operation.
            </p>

            <button
            onClick={onAdd}
            >Add Fruits
            </button>
            
            <button
            onClick={onRemove}
            >Remove Fruit
            </button>
        </div>

        <div className='method-item'>
            
        </div>
        

    </div>
  )
}

export default ArrayMethods