import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./styles";

interface ListProps {}

const List = ({}: ListProps) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7777/tasks").then((res) => {
      setList(res.data);
      console.log(res.data);
    });
  }, []);

  const deleteTask = (id: number) => {
    axios.delete(`http://localhost:7777/tasks/${id}`).then(() => {
      setList(list.filter((task: any) => task.id !== id));
    });
  };

  return (
    <S.StyledList>
      <ul>
        {list.map((task: any) => (
          <li key={task.id}>
            <S.StyledStatusColor status={task.status} />
            <S.StyledItemList>
              <h3>{task.name}</h3>
              <p>{task.description}</p>
            </S.StyledItemList>
            <span>
              <button onClick={() => deleteTask(task.id)}>X</button>
            </span>
          </li>
        ))}
      </ul>
    </S.StyledList>
  );
};

export default List;
