import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        {/* 클릭시 onToggle(id) 통해 checked-> true*/}
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation(); //onToggle이 실행되지 않도록 함
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`todo-text ${checked && "checked"}`}>
          {" "}
          {/* checked===true면 className = checked 적용*/}
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">✓</div>}{" "}
        {/* checked===true면 <div></div> 반환*/}
      </div>
    );
  }
}

export default TodoItem;
