import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  //cofigureStore는 Redux Toolkit에서 제공하는 함수 중 하나로
  //Redux store를 쉽게 생성하게 해줌
  //store함수에 store의 구성 옵션들을 포함하는 객체를 전달
  //이 객체에는 주로 reducer, middleware, devTools등의 옵션이 포함됨
  reducer: {
    //리듀서 옵션은 store에 등록할 리듀서 함수들을 정의
    text: textReducer, //키와 실제 함수 페어로
    //리듀서 함수는 state와 action을 받아 새로운 state를 반환하는 역할
    //이렇게 정의된 리듀서 함수들은 store의 state 트리에 포함됨
  },
});

export default store;
//생성된 Redux store를 내보냄
//이 store는 App 컴포넌트에서 Provider 컴포넌트를 통해
//전체 앱에 제공됨

//Redux store 생성
