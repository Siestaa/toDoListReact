const TaskList = ({ list, removeTask, doneButton, done }) => {
  const taskArrayLenght = [...list].length;

  return (
    <div>
      {taskArrayLenght > 0 ? (
        <ul className="task-list">
          <h2 className="task-list__title">Your tasks</h2>
          {list.map((task, index) => (
            <li
              key={index}
              className={`task ${task.important ? `important` : ``} ${
                done ? `doneTask` : ``
              }`}
            >
              <p className="task__text">{task.text}</p>
              <button
                className="task__button delete"
                type="button"
                onClick={() => removeTask(task)}
              >
                Delete
              </button>
              <button
                className="task__button done"
                type="button"
                onClick={() => doneButton()}
              >
                {done ? `Repeat` : `Done`}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">Tasks not found!</div>
      )}
    </div>
  );
};

export default TaskList;
