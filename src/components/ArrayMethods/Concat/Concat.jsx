import React from 'react'

const Concat = () => {

    const colors = ["Red", "Blue", "Green"]

    const animals = ["Dog","Cat", "Cow"]


    const onConcat = () => {
        let newArray = colors.concat(animals)

        console.log(newArray)
    }

  return (
    <div className='method-item'>

        <h2>
            concat()
            Exercise: Create two arrays, one containing three different colors and the other containing three different animals. 
            Use concat() to combine the two arrays into a single array. 
            Print the resulting combined array.
        </h2>

        <button
        onClick={() => onConcat()}>
            Concat
        </button>

    </div>
  )
}

export default Concat