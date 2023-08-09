import React, {useState} from 'react'

const SimpleTodoApp = () => {


  const [inputValue, setInputValue] = useState("")


  const defaultTodos = [{
    text: "This is the First Todo",
    completed: false
  },
  {
    text: "This is the Second Todo",
    completed: false
  },
  {
    text: "This is the Third Todo",
    completed: false
  }
]

  const [todos, setTodos] = useState(defaultTodos)


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

    let todoIndex = todos.findIndex(todo => text === todo.text)
    
    let updatedTodos = [...todos]

    updatedTodos.splice(todoIndex, 1)
    

    setTodos(updatedTodos)
  }


  const onCompleteTodo = (todo) => {
    
    let modifiedTodo = {...todo, completed: true}

    let updatedTodos = todos.map( item => ( todo === item ? modifiedTodo : item))

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

            <button
            onClick={()=> onCompleteTodo(item)}
            >Complete</button>

            {item.completed ? <h3>El todo Esta Completado!!!</h3> : null}


          </div>

          
        ))}

        
    </div>
  )
}

export default SimpleTodoApp