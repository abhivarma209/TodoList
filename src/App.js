import './App.css';
import {useState} from "react";
import { Task } from './Task'

function App() {
  const [todolist,setTodoList]=useState([]);
  const [newTask,setNewTask]=useState();

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () =>{
    const task={
      id:todolist.length===0?1:todolist[todolist.length-1].id+1,
      taskName:newTask,
      completed: false,
    }
    setTodoList([...todolist,task]);
  }
  
  const deleteTask = (id) =>{
    setTodoList(todolist.filter((task) => task.id !== id));
  }

  const completeTask = (id) => {
    setTodoList(
      todolist.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todolist.map((task)=>{
          return (
          <Task 
            taskName={task.taskName} 
            id={task.id} 
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
          )
        })}
      </div>
    </div>
  );
}

export default App;
