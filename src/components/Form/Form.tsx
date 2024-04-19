import axios from "axios";
import * as S from "./styles";
import db from "../../../server.json";

const Form = () => {
  const addTask = async () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const description = (
      document.getElementById("description") as HTMLInputElement
    ).value;
    const status = (document.getElementById("status") as HTMLSelectElement)
      .value;

    const body = {
      id: (db.tasks.length + 1).toString,
      name,
      description,
      status,
    };

    try {
      await axios.post("http://localhost:7777/tasks", body);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.StyledForm onSubmit={addTask}>
      <h1>ToDo List</h1>
      <h3>Simple ToDo List UI App</h3>
      <div>
        <label htmlFor="task">Task</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <input type="text" id="description" name="description" />
      </div>
      <select name="status" id="status">
        <option value="todo">To Do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
      <button type="submit">Add Task</button>
    </S.StyledForm>
  );
};

export default Form;
