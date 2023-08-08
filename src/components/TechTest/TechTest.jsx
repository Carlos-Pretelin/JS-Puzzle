import React,{useState} from 'react'
import _ from "lodash";


const TechTest = () => {


    //This version is much simpler, just need to use this special method to do everything but its good to know
    //  const charCounter = (num) => {
    //      const acumulator = _.countBy(num)
    //      setResult(acumulator)
    //      console.log(acumulator)
    //  }

    const [inputValue, setInputValue] = useState("")

    const [mostRepeatedChar, setMostRepeatedChar] = useState(null)

    const onInputValueChange =(e) => {
        const value = e.target.value;

        setInputValue(value)
        console.log(value)
    }

    const onEvaluate = () => {

        if(inputValue.length >= 5 && inputValue.length <= 8){
            console.log("The number is Valid!")
            charCounter(inputValue)
        }else{
            console.log("The number is Not Valid!")
        }
    }

    const charCounter = (num) => {
        let acumulator = {};

        for(let i = 0; i < num.length; i++){
            let currentCharacter = num[i];

            if(acumulator[currentCharacter]){
                acumulator[currentCharacter]++
            }else{
                acumulator[currentCharacter] = 1
            }
        }
        console.log(acumulator)
        findMostRepeatedCharacter(acumulator)
    }


    const findMostRepeatedCharacter = (result) => {
        if(!result) return;

        let mostRepeatedCharacter = ""
        let maxReps = 0

        for(const Char in result){
            let currentCharacterReps = result[Char]
            if(currentCharacterReps > maxReps){
                maxReps = currentCharacterReps
                mostRepeatedCharacter = Char
            }
        }
        setMostRepeatedChar(mostRepeatedCharacter)
    }

  return (
    <div>

     <input 
     placeholder='Write a number...'
     value={inputValue}
     onChange={onInputValueChange}
     type="number" />   

    <button
    onClick={onEvaluate}
    >Evaluate</button>


    {mostRepeatedChar ? <h1>The Most Repeated Character is {mostRepeatedChar}!!!</h1> : null}
        

    </div>
  )
}

export default TechTest