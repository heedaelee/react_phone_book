import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    //TodoItem을 map으로 배열 돌리기, 후 {list}던짐
    const list = todos.map(({ id, text, checked }) => (
      <TodoItem 
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    ));
    
    return <div>{list}</div>;
  }
}
export default TodoItemList;
