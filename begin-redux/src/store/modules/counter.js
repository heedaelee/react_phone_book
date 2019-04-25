/*  카운터 관련 상태 로직 */
import {createAction, handleActions} from 'redux-actions';

//액션타입을 정의 해줍니다.
const INCREMENT = 'counter/INCREMENT';//다른 module에서도 동일한 naming 가능
const DECREMENT = 'counter/DECREMENT';//ex : todo/INCREMENT 


//액션 생성 함수를 만듭니다.
export const increment = createAction(INCREMENT);//3.컨테이너 컴포넌트에서 여기 객체 CounterActions.increment() 실행 한 것 받아줌
export const decrement = createAction(DECREMENT);//그리고 createAciton()에 상수INCREMENT 넣어줌
                                                  //4.  그러면 handleActions에서 액션 받고 로직처리

//모듈의 초기 상태를 정의합니다.
const initialState = {
  number:0
}

//handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
//두번째 파라미터는 초기 상태임!!
//리듀서 함수는 action, state 를 참조하여 새로운 상태 객체를 만들어서 반환!!
export default handleActions({
  [INCREMENT]:(state,action) => {
    return {number : state.number + 1};
  },
  // action 객체를 참조하지 않으니까 이렇게 생략을 할 수도 있겠죠?
  // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화 시켰습니다. 
  [DECREMENT]:({ number }) => ({ number: number -1})//위와 다르게 return 생략,똑같은소스
},initialState)
