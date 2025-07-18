import { useState, useEffect } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import Navbar from './components/Navbar'
import { MdDelete } from "react-icons/md";
<script src="https://cdn.tailwindcss.com"></script>

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("");
  const [showFinished, setShowFinished] = useState(true)
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      setTodos(JSON.parse(todoString));
    }
  }, [])
  
  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  const handleEdit = (e, id) => {
    let index=todos.findIndex(item=>{
      return item.id === id;
    })
    setTodo(todos[index].todo)
    handleDelete(e, id);
    handleAdd;
    saveToLS();
  }
  const handleDelete = (e, id) => {
    // let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    // console.log(`index: ${index}`)
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
    saveToLS();
  }
  const handleAdd = () => {
    if(todo.length){
      setTodos([...todos, {id: uuidv4(), todo, isCompleted: false }])
      setTodo("");
      saveToLS();
    }
    else{
      alert("Minimum 1 character is required in todo!")
    }
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  }
  const toggleFinished = () => {
    setShowFinished(!showFinished)

  }
  
  return (
    <>
      <Navbar />
      <div className="info bg-slate-300 rounded-3xl m-2.5 p-8 min-h-[70vh] sm:w-1/2 sm:mx-auto">
      <h1 className='font-bold text-center text-2xl'>iTask - Manage your todos at one place</h1>
        <div className="addTodo my-2">
          <h2 className='text-xl font-bold'>Add Todo's</h2>
          <div className='flex gap-2 mt-4'>
            <input onChange={handleChange} value={todo} type="text" placeholder='Enter your task...' className='w-full rounded-full px-5 py-1' />
            <button onClick={handleAdd} className='bg-slate-700 hover:bg-slate-900 px-2 font-bold text-white rounded-md mx-1'>Add</button>
          </div>
        </div>
        <div className="yourTodos">
          <div className="todos pt-2">
            <h2 className='text-2xl font-bold border-t-2 border-black pt-4'>Your todo's</h2>
            <input type="checkbox" onChange={toggleFinished} value={showFinished} checked={showFinished} /> Show Finished
            {todos.length===0 && <div className='m-2'>No todos to display</div>}
            {todos.map((item, index) => {
              return (showFinished || !item.isCompleted) &&  <div key={index} className="todo flex bg-slate-400 min-h-9 items-center p-3 rounded-2xl my-2 justify-between">
                <div className='flex gap-4'>
                <input checked={item.isCompleted} onChange={handleCheckbox} type="checkbox" name={item.id} value={item.isCompleted} id="" />
                <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                </div>
                <div className='buttons flex gap-1'>
                  <button onClick={(e)=>handleEdit(e, item.id)} name={item.id} className='bg-slate-700 hover:bg-slate-900 text-white px-2 py-2 mx-1 rounded-md'><FaEdit /></button>
                  <button onClick={(e)=>handleDelete(e, item.id)} name={item.id} className='bg-slate-700 hover:bg-slate-900 text-white px-2 mx-0 rounded-md'><MdDelete /></button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
