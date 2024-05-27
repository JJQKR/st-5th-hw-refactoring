import React, { Children } from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import TextContextProvider from "./context/TextContextProvider";
// src안에 context 폴더 만들고 TextContextProvider 컴포넌트 생성
// text 관련, App.jsx 대신 저기서 관리하면
// App.jsx가 더 가벼워지고 선택적 사용 가능

function App() {
  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextContextProvider>
        <TextInput />
        <TextList />
      </TextContextProvider>
      {/* TextInput과 TextList가
        TextContextProvider의 children props다
        <TextContext.Provider value={{}}>
          {Children}
        </TextContext.Provider>
        이렇게 감싸지고 있는 구조 */}
    </div>
  );
}

export default App;
