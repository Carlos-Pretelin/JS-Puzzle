import React from 'react'

const ForEach = () => {

    const numbers = [1,2,3,4,5,6,7]


    const onIterate = () => {

        numbers.forEach( (item) => console.log(item*2))
    }

    const squaredNumbers = numbers.map( item => item * item)


    const onPrint = () => {
        console.log(numbers)
        console.log(squaredNumbers)
    }
  return (
    <div>
        <h2>forEach()

        Exercise: Create an array of numbers. 
        Use forEach() to iterate over the array and print each number multiplied by 2.
        </h2>

        <button
        onClick={onIterate}
        >Iterate</button>

        <h3>map()

        Exercise: Create an array of numbers. 
        Use map() to create a new array where each number is squared. 
        Print both the original and the squared array.

        </h3>

        <button
        onClick={onPrint}
        >Print Arrays</button>


    </div>
  )
}

export default ForEach