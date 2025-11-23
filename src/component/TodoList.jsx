import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
  return (
    <div className="TodoList">
      <h4>Todo List 🦉</h4>
      <input className="searchbar" placeholder="검색어 입력해주세요"/>
      <div className="list_wrapper">
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </div>
    </div>
  );
};

export default TodoList;