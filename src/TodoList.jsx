import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  console.log(todos);
  return (
    <ul className="list">
      {todos.length === 0 && "Nothing to do"}
      {todos.map((todo) => {
        return (
          <TodoListItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
