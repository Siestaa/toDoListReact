import { useState } from "react";
import "./styles.css";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

export default function App() {
  const [task, setTask] = useState({ text: "", important: false });
  const [taskList, setTaskList] = useState([]);
  const [done, setDone] = useState(false);

  const addTask = () => {
    if (task.text !== "") {
      setTaskList([...taskList, task]);
      setTask({ text: "", important: false });
    }
  };

  const removeTask = (text) => {
    const newTaskList = taskList.filter((task) => {
      return task !== text;
    });
    setTaskList(newTaskList);
  };

  const doneTask = () => {
    done === false ? setDone(true) : setDone(false);
  };

  return (
    <div className="App">
      <h1 className="title">toDo List</h1>
      <TaskInput task={task} setTask={setTask} addTask={addTask} />
      <TaskList
        list={taskList}
        removeTask={removeTask}
        doneButton={doneTask}
        done={done}
      />
    </div>
  );
}
