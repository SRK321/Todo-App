import TodoTitle from "./components/TodoTitle";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Container from "./components/Container";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItem, setTodoItem] = useState([]);

  const handleNewItem = (name, date) => {
    console.log(`The new name and date is ${name} and ${date} is added.`);
    const newTodoItem = [...todoItem, { name: name, date: date }];
    setTodoItem(newTodoItem);
  };

  const handleDelete = (todoName) => {
    console.log(`Item to be deleted is ${todoName}`);
    const newTodoItem = todoItem.filter((item) => item.name != todoName);
    console.log(newTodoItem);
    setTodoItem(newTodoItem)

   
  };

  return (
    <Container>
      <TodoTitle />
      <table className="table">
        <tbody>
          <AddTodo onNewADD={handleNewItem} />
          {todoItem.length === 0 && <WelcomeMessage></WelcomeMessage>}
         <TodoItems items={todoItem} onDeleteClick={handleDelete}/>
        </tbody>
      </table>
    </Container>
  );
}

export default App;
