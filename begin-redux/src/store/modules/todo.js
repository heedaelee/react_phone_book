import { createAction, handleActions } from "redux-actions";
import { Record, List } from "immutable";

const CHANGE_INPUT = "todo/CHANGE_INPUT";
const INSERT = "todo/INSERT";
const TOGGLE = "todo/TOGGLE";
const REMOVE = "todo/REMOVE";

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0; //todo 아이템에 들어갈 고유 값 입니다.

// Record 함수는 Record 형태 데이터를 만드는 함수를 반환합니다.
// 따라서, 만든 다음에 뒤에 ()를 붙여줘야 데이터가 생성됩니다.
const initialState = Record({
  input: "",
  todos: List()
})();

//todo 아이템의 형식을 정합니다.
const TodoRecord = Record({
  id: id++,
  text: "",
  checked: false
});

export default handleActions({
    //한 줄 짜리 코드로 반환 할 수 있는 경우엔 다음과 같이 블록{ } 을 생략 할 수 있습니다.
    [CHANGE_INPUT]: (state, action) => state.set("input", action.payload),
    [INSERT]: (state, { payload: text }) => {
      //TodoRecord를 사용해야 아이템도 Record형식으로 조회가능합니다.
      // 빠져있는 값은, 기본 값을 사용하게 됩니다.(checked : false)
      const item = TodoRecord({ id: id++, text });
      return state.update("todos", todos => todos.push(item));
    },
    [TOGGLE]: (state, { payload: id }) => {
      //id값을 가진 index를 찾아서 checked 값을 반전 시킵니다.
      const index = state.get("todos").findIndex(item => item.get("id") === id);
      return state.updateIn(["todos", index, "checked"], checked => !checked);
    },
    [REMOVE]: (state, { payload: id }) => {
      //id 값을 가진 index를 찾아서 지웁니다.
      const index = state.get("todos").findIndex(item => item.get("id") === id);
      return state.deleteIn(["todos", index]);
    }
  },initialState);
