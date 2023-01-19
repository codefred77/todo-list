function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Go surf',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ])


  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    // Get a handle on the current todos
    let temp = [...todos];
    // Remove the todo item indicate by the index
    temp.splice(index,1);
    // Update todo list
    setTodos(temp);
  }
  return(
    <><div className="title">
      <h1>Todo List</h1>
    </div><div className="app">
        <div className="todo-list">
          {todos.map((todo, i) => (
            <Todo key={i} todo={todo} index={i} remove={removeTodo} />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div></>

  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
