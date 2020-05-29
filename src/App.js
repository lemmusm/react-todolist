import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  // get info from localStorage
  let lsTasks = JSON.parse(localStorage.getItem('todos'));
  if (!lsTasks) {
    lsTasks = [];
  }
  // set state with info from localstorage
  const [tasks, setTasks] = useState(lsTasks);
  // ADD NEW TASK TO STATE
  const addTask = (nametask) => {
    const newTask = [...tasks, { nametask }];
    setTasks(newTask);
  };
  // set item on localStorage when state change
  useEffect(() => {
    if (lsTasks) {
      localStorage.setItem('todos', JSON.stringify(tasks));
    } else {
      localStorage.setItem('todos', JSON.stringify([]));
    }
  }, [lsTasks, tasks]);

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
