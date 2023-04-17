import React, { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Wrapper from './components/Wrapper/Wrapper';
import DeleteBlock from './components/DeleteBlock/DeleteBlock';


let savedTodos = JSON.parse(localStorage.getItem("todo")) ?? [];

function App() {

  const [todo, setTodo] = useState(savedTodos);
  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }, [todo])


  function addTask() {
    if (value.length) {
      let newArr = [
        ...todo,
        {
          id: new Date().toISOString(),
          text: value,
          isDone: false,
          isImportant: false,
        }
      ];
      setTodo(newArr);
      setValue('');
    }
  }

  const deleteTask = (id) => {
    setTodo(todo.filter((el) => el.id !== id));
  }

  const delComplited = () => {
    setTodo(todo.filter((el) => el.isDone === false));
  };

  const doneTask = (id) => {
    setTodo(
      todo.map((el) => {
        if (el.id === id) {
          el.isDone = !el.isDone;
          return el;
        } else {
          return el;
        }
      })
    )
  }


  const deleteAll = () => {
    setTodo([]);
  }


  return (
    <Wrapper>
      <Form
        addTask={addTask}
        setValue={setValue}
        value={value}
        todo={todo}
        deleteTask={deleteTask}
        doneTask={doneTask}
        // setImportant={setImportant}

      />

      <DeleteBlock deleteAll={deleteAll} delComplited={delComplited} />
    </Wrapper>
  );
}

export default App;
