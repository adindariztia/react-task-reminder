import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react'
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const name = "Udin";
  const [tasks, setTask] = useState([
    {id:1,
    text:'lala',
    day: 'sabtu',
    reminder: false
},
{
    id:2,
    text: 'lulu',
    day: 'minggu',
    reminder: true
}
])
// add task
const addTask = (task) => {
  // console.log(task);
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = {id, ...task}
  setTask([...tasks, newTask])
}

// delete task
const deleteTask = (id) => {
  console.log('delete', id)
  // setTasks(tasks.filter(() => tasks.id !== id))
  setTask(tasks.filter((task) =>  task.id !== id))
}

// toggle reminder
const toggleReminder = (id) => {
  // console.log(id)
  setTask(tasks.map((task) => task.id === id 
  ? {...task, reminder: !task.reminder } : task))
}
  return (
    <div className="container">
      {/* <h1>Hello from {name}</h1> */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      { tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder}/> : ('No Tasks to Show')}
    </div>
  );
}

export default App;
