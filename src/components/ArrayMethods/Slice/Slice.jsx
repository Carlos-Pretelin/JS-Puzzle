import React from 'react'

const Slice = () => {

    const names = ["Carlos", "Luis", "Pedro", "Nami", "Chopper"]

    const names2 = ["Carlos", "Luis", "Pedro", "Nami", "Chopper"]

    const newNames = names.slice(1, 4)
  return (
    <div>
        <h2>
            slice()

            Exercise: Create an array with five different names. 
            Use slice() to create a new array containing the second, third, and fourth names from the original array. 
            Print both the original and the sliced array.
        </h2>

        <h3>El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). 
            El array original no se modificará.
        </h3>

        {newNames.map( (item, index) => (
            <h2 key={index}>{item}</h2>
        ))}


        <h2>splice()

            Exercise: Create an array with at least five elements. 
            Use splice() to remove the third element and replace it with two new elements. 
            Print the modified array.
        </h2>


        {names2.map( (item, index) => (
            <h3 key={index}>{item}</h3>
        ))}


    </div>
  )
}

export default Slice