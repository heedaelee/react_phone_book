// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, {Component} from 'react';
import Todos from 'components/Todos';
import {connect} from 'react-redux';
import { bindActionCreators }from 'redux';
import {TodoActions} from 'store/actionCreators';

class TodosContainer extends Component {
  handleChange = (e) => {
    //인풋 값 변경
    TodoActions.changeInput(e.target.value);
  }

  handleInsert = () => {
    //아이템 추가
    const { input} = this.props;
    TodoActions.insert(input); //추가하고
    TodoActions.changeInput('');//기존 인풋값 비우기
  }

  handleToggle = (id) => {
    //삭제선 켜고 끄기
    TodoActions.toggle(id);
  }

  handleRemove = (id) => {
    //아이템 제거
    TodoActions.remove(id);
  }

  render(){
    const { handleChange, handleInsert, handleRemove, handleToggle} = this;
    const { input, todos} =this.props;

    return(
      <Todos 
        input={input}
        todos={todos}
        onChange={handleChange}
        onInsert={handleInsert}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    );
  }
}

//컴포넌트를 리덕스와 연동 할 때에는 connect 을 사용합니다.
//connect() 의 결과는, 컴포넌트에 props 를 넣어주는 함수를 반환합니다.
//반환된 함수에 우리가 만든 컨테이너를 넣어주면 됩니다. 
export default connect(
  //state를 비구조화 할당 해주었습니다. 
  ({todo})=>({
    //immutable을 사용하니, 값을 조회 할 때에는 .get or Record 사용
    input: todo.input,
    todos: todo.todos
  })
)(TodosContainer);//컴포넌트에 props를 넣어주는 함수를 반환, 
                  //그러면 이 컨테이너를 매개변수로 던짐
