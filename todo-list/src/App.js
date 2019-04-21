import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import Palette from './components/Palette';

class App extends Component {
  id = 3; //이미 0,1,2가 존재하므로 3으로 설정
  state = {
    input: "",
    color:"#343a40",
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
    const { input,color, todos } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color:color//배열의 새 객체요소 만들때, 
        //state에 color를 갖고와 추가생성
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
  /*
  another way... map쓰는거 백배 편하다!!
  handleToggle = id  =>{
    const {todos} = this.state;
    //파라미터로 받은 id로 몇번째 item인지 찾습니다. 
    //findindex() 매개변수 콜백함수가 true를 반환하는 조건의 index를 찾음
    const index = todos.findIndex(todo =>todo.id===id);
    const selected = todos[index]; //바꿀 객체 선택하기
    const nextTodos = [...todos];//전체 배열 몽땅 복사
    nextTodos[index]={
      ...selected,
      checked:!selected.checked
    }
    this.setState({
      input:"",
      todos:nextTodos
    })
  }
*/

  handleRemove = id => {
    const { todos } = this.state;
    this.setState({
      input: "",
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  handleSelect = (color) =>{
    this.setState({
      color
    })
 }

  render() {
    const { input, todos,color } = this.state;
    const {
      handleCreate,
      handleChange,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelect
    } = this;

    const colors=['#343a40', '#f03e3e', '#12b886', '#228ae6'];

    return (
      <TodoListTemplate
        form={
          <Form
            onCreate={handleCreate}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={input}
            color={color}
          />
        }
        palette={
          <Palette 
            colors={colors}
            selected={color}
            onSelect={handleSelect}
          />
        }
      >
        <TodoItemList
          todos={todos}
          color={color}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
