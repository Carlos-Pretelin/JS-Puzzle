import React, {useState} from 'react'

const SimpleTodoApp = () => {


  const [inputValue, setInputValue] = useState("")

  const [todos, setTodos] = useState([])

  const onInputValueChange = (e) => {
    const value = e.target.value;

    setInputValue(value)
    //console.log(value)
  }

  const addNewTodo = (text) => {

    let updatedTodos = [...todos];

    updatedTodos.push( {
      text: text,
      completed: false
    })

    setTodos(updatedTodos)
    setInputValue("")

  }

  // const onDeleteTodo = () => {

  //   let updatedTodos = [...todos]

  //   updatedTodos.splice(0, updatedTodos.length)

  //   setTodos(updatedTodos)
  // }

  const onDeleteTodo = (text) => {

    let todoIndex = todos.findIndex( todo => text === todo.text);

    let updatedTodos = [...todos]

    updatedTodos.splice(todoIndex, 1)

    setTodos(updatedTodos)
  }

  return (
    <div>
        <h1>Simple Todo App</h1>

        <input 
        placeholder='Write a new To-do !!!'
        value={inputValue}
        onChange={onInputValueChange}
        type="text" />

        <button
        onClick={() => addNewTodo(inputValue)}
        >Add New To-do</button>


        {todos.map( (item, index)=> (
          <div key={index}>
            <h2>{item.text}</h2>
            <button
            onClick={()=> onDeleteTodo(item.text)}
            >X</button>
          </div>
        ))}

        <button
        onClick={() => onDeleteTodo()}
        >Delete All To-dos</button>
    </div>
  )
}

export default SimpleTodoApp