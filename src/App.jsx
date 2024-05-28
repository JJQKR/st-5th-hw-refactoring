import React from "react";

const App = () => {
  return (
    <Provider store={store}>
      {/* React-Redux의 Provider 컴포넌트 사용 */}

      <div>
        <h1>Text Input and Listing</h1>
        <TextInput></TextInput>
        <TextList></TextList>
      </div>
    </Provider>
  );
};

export default App;

//React-Redux의 Provider로 store를 제공
//얘 js파일로 바꿔야 하나
