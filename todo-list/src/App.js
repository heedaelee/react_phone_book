import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
  id = 3; //이미 0,1,2가 존재하므로 3으로 설정
  state = {
    input: "",
    todos: [
      { id: 0, text: "리액트 소개", checked: false },
      { id: 1, text: "리액트 소개", checked: true },
      { id: 2, text: "리액트 소개", checked: false }
    ]
  };
  handleChange = ({ target }) => {
    this.setState({
      input: target.value //input 안에 입력값
    });
  };
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };
  handleKeyPress = e => {
    //눌려진 키가 Enter면 handleCreate 호출
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };
  handleToggle = id => {
    //수정할땐, map & 삼항조건연산자 사용 !! 암기
    const { todos } = this.state;
    this.setState({
      input: "",
      todos: todos.map(todo =>
        todo.id === id
          ? {
              id: todo.id,
              text: todo.text,
              checked: !todo.checked
            }
          : todo
      )
    });
  };
  handleRemove = id => {
    const { todos } = this.state;
    this.setState({
      input: "",
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { input, todos } = this.state;
    const {
      handleCreate,
      handleChange,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate
        form={
          <Form
            onCreate={handleCreate}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={input}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
