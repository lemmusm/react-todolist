import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  // ADD NEW TASK TO STATE
  const addTask = (nametask) => {
    const newTask = [...tasks, { nametask }];
    setTasks(newTask);
  };

  // MARK TASK DONE
  const tasksCheck = (index) => {
    const check = [...tasks];
    check[index].complete = true;
    setTasks(check);
  };

  const tasksUncheck = (index) => {
    const uncheck = [...tasks];
    uncheck[index].complete = false;
    setTasks(uncheck);
  };

  // DELETE TASK
  const taskDelete = (index) => {
    const deleted = [...tasks];
    deleted.splice(index, 1);
    setTasks(deleted);
  };

  return (
    <div className="App content">
      <TaskList
        tasks={tasks}
        tasksCheck={tasksCheck}
        tasksUncheck={tasksUncheck}
        taskDelete={taskDelete}
      />
      <AddTaskForm addTask={addTask} />
    </div>
  );
}

export default App;
