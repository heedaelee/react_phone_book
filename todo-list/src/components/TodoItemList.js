import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return this.props.todos !== nextProps.todos;
  }

  render() {
    console.log(todos);
    const { todos, onToggle, onRemove } = this.props;
    //TodoItem을 map으로 배열 돌리기, 후 {list}던짐
    const list = todos.map(({ id, text, checked,color }) => (
      <TodoItem
        key={id} 
        id={id}
        text={text}
        checked={checked}
        color={color}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    ));
    
    return <div>{list}</div>;
  }
}
export default TodoItemList;
