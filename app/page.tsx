import AddNewTodo from "./add-new-todo";
import TodoList from "./todo-list";

export default function Home() {
  return (
    <div>
      <AddNewTodo></AddNewTodo>
      <TodoList></TodoList>
    </div>
  );
}
