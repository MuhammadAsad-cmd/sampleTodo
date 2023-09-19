import React, { useState } from 'react';
import "./App.css";
import TodoInput from './components/TodoInput';
import Todolist from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, { text: inputText, completed: false }]);
    }
  }

  const toggleCompletion = (index) => {
    const newListTodo = [...listTodo];
    newListTodo[index].completed = !newListTodo[index].completed;
    setListTodo(newListTodo);
  }

  const deleteListItem = (index) => {
    const newListTodo = [...listTodo];
    newListTodo.splice(index, 1);
    setListTodo(newListTodo);
  }

  const editListItem = (index, newText) => {
    const newListTodo = [...listTodo];
    newListTodo[index].text = newText;
    setListTodo(newListTodo);
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => (
          <Todolist
            key={i}
            index={i}
            item={listItem}
            toggleCompletion={toggleCompletion}
            deleteItem={deleteListItem}
            editItem={editListItem}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
