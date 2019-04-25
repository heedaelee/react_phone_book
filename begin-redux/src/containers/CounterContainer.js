// 리덕스와 연동된 컨테이너 컴포넌트 작성 = 컨테이너 Component
import React, { Component } from 'react';
import Counter from 'components/Counter'; //프레젠테이셔널 Component (리듀서 연동시키는 곳)
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CounterActions } from 'store/actionCreators'; //리듀서를 모듈화!

class CounterContainer extends Component { //액션시1,2,3,4!!!
  handleIncrement = () => {//1. 뷰단에서 action이 여기로 넘어온다
    CounterActions.increment();//2.리듀서 메서드 호출
  }

  handleDecrement = () => {
    CounterActions.decrement();
  }

  render() {
    const { handleIncrement, handleDecrement}=this;
    const { number } = this.props;
    return(
      <Counter 
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        number={number}
      />
    );
  }
}
/*첫번째 파라미터 mapStateToProps : props값으로 넣어 줄 상태를 정의해줍니다.

  컴포넌트를 리덕스와 연동 할 때에는 connect 을 사용합니다.
  connect() 의 결과는, 컴포넌트에 props 를 넣어주는 함수를 반환합니다.
  반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됩니다. */
export default connect(
    (state) =>({
      number:state.counter.number
    })
  )(CounterContainer);//사실상 connet에서 props 할당하고 내려두는 듯.
  
