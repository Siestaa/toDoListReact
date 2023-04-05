const TaskInput = ({ task, setTask, addTask }) => {
  return (
    <div className="input__container">
      <input
        className="input__field"
        type="text"
        placeholder="Write your task..."
        value={task.text}
        onChange={(e) => {
          setTask({ ...task, text: e.target.value });
        }}
      />
      <input
        className="input__important"
        type="checkbox"
        name="important"
        value="important"
        id="important"
        onChange={(e) => {
          setTask({ ...task, important: e.target.checked });
        }}
        checked={task.important}
      />
      <label className="input__lable" htmlFor="important">
        Important
      </label>
      <button className="input__button" type="button" onClick={addTask}>
        Create Task
      </button>
    </div>
  );
};

export default TaskInput;
