import React,{useState} from 'react'
import _ from "lodash";


const TechTest = () => {


    const [inputValue, setInputValue] = useState("")

    const [result, setResult] = useState(null)



    const onInputValueChange = (e) => {
        setInputValue(e.target.value)
        //console.log(e.target.value)
    }
    //This version is much simpler, just need to use this special method to do everything but its good to know
     const charCounter = (num) => {
         const acumulator = _.countBy(num)
         setResult(acumulator)
         console.log(acumulator)
     }

    // const charCounter = (num) => {
        
    //     let acumulator = {}

    //     for(let i = 0; i < num.length; i++){
    //         let element = num[i]

    //         if(acumulator[element]){
    //             acumulator[element]++
    //         } else {
    //             acumulator[element] = 1
    //         }
    //     }

    //     console.log(acumulator)
    // }


    const findMostRepeatedNumber = () => {
        if(!result) return;

        let mostRepeatedCharacter = ""
        let maxCount = 0

        for(const char in result){
            if(result[char] > maxCount){
                maxCount = result[char]
                mostRepeatedCharacter = char
            }
        }

        console.log(mostRepeatedCharacter)
    }

    


    const onEvaluate = () => {
        if(inputValue.length >= 5 && inputValue.length <= 8){
            console.log("The number is valid")
            charCounter(inputValue)
        } else{
            console.log("The number is NOT valid")
        }
    }

  return (
    <div>


        <input 
        value={inputValue}
        onChange={onInputValueChange}
        placeholder='Write a number'
        type="number" />

        <button
        onClick={onEvaluate}
        >Evaluate</button>

        <button
        onClick={findMostRepeatedNumber}
        >Most Repeated Character</button>

        

    </div>
  )
}

export default TechTest