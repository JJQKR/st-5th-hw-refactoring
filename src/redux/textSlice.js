import { createSlice } from "@reduxjs/toolkit";
//createSlice는 Redux 상태 관리를 위한 핵심 함수 중 하나
const initialState = {
  texts: localStorage.getItem("texts")
    ? JSON.parse(localStorage.getItem("texts"))
    : [],
};

const textSlice = createSlice({
  //createSlice함수를 호출해 Redux 슬라이스를 생성
  //슬라이스는 Redux 상태 관리를 위한 핵심 단위
  name: "text", //슬라이스의 이름을 "text"로 지정, Redux store내에서 해당 슬라이스 식별에 이름 사용됨
  initialState, //위에서 정의한 초기 상태를 슬라이스의 초기 상태로 사용
  reducers: {
    //리듀서 함수들을 정의, 여기서는 onAddText 리듀서 함수를 정의함
    onAddText: (state, action) => {
      //state와 action 객체를 받아 새로운 state를 반환
      state.texts.push(action.payload); //state.texts에 action.payload를 받아 추가하고
      localStorage.setItem("texts", JSON.stringify(state.texts)); //localStorage에 업데이트 된 texts를 저장
    },
  },
});

export const { onAddText } = textSlice.actions;
//왜 actions지?
//=> textSlice.actions는 createSlice함수가 자동으로 생성한 액션 함수들으 ㅣ집합
// { onAddText } 부분은 구조분해할당을 사용해
// textSlice.actions 객체에서 onAddText함수를 추출하는 것임

export default textSlice.reducer; //textSlice의 리듀서 함수를 내보냄
// (textSlice객체에서 함수를 담고 있는 reducer 속성을 내보내는 것)
// 즉 textSlice.reducer는 이 자동 생성된 리듀서 함수를 의미

//이 리듀서 함수는 Redux store에 등록되어 state 업데이트를 담당

//텍스트 관련 상태와 액션을 정의

//다른 파일(ex.store.js)에서 Redux store를 생성할 때 사용될 것
// import { configureStore } from '@reduxjs/toolkit';
// import textReducer from './textSlice';

// const store = configureStore({
//   reducer: {
//     text: textReducer,
//   },
// });

// export default store;

//이래야 되는데 지금 이름 일치 안 되고 있는 듯
// => store.js에서의 textReducer
//이 부분은 약간 혼동을 줄 수 있다
//일반적으로 Redux Toolkit에서는
//createSlice를 사용하여 리듀서 함수를 정의하고,
//이를 configureStore에 등록함
//따라서 textReducer라는 이름은 textSlice.reducer를 가리키는 게 일반적임
//즉, textReducer는 textSlice.reducer와 동일한 의미다

//요악하면
//export const { onAddText } = textSlice.actions;는
//onAddText 액션 생성 함수를 내보내는 것이고,
//export default textSlice.reducer;는
//textSlice에서 생성된 리듀스 함수를 내보내는 것이다
//그리고 store.js에서 textReducer라는 이름으로 사용하는 것은
//일반적 Redux Toolkit 패턴과 동일한 의미를 가짐
