import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onAddText } from "../redux/textSlice";

function TextInput({ onAddText }) {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(onAddText(inputValue));
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TextInput;

//useDispatch를 사용해 onAddText 액션을 디스패치함
//js파일로 변경?

// 함수 이름을 onAddText에서 addText로 바꾼 이유는
// Redux Toolkit의 관례를 따르기 위해서입니다.
// Redux Toolkit에서는 액션 생성 함수의 이름 규칙이 약간 다릅니다.
// 일반적으로 Redux에서는 "on" 접두사를 사용하지만,
// Redux Toolkit에서는 이를 생략합니다.

// 예를 들어, 일반적인 Redux 액션 생성 함수는 다음과 같이 작성됩니다:

// javascript

// const onAddText = (text) => ({
//   type: 'ADD_TEXT',
//   payload: text,
// });

// 하지만 Redux Toolkit에서는 다음과 같이 작성됩니다:

// javascript

// const addText = (text) => ({
//   type: 'ADD_TEXT',
//   payload: text,
// });
// 이렇게 하면 액션 생성 함수의 이름이 더 간결해지고,
// 리듀서 함수와 일관성 있게 작성할 수 있습니다.

// 따라서 제가 TextSlice.js 파일에서 사용한 addText 함수 이름은
// 이러한 Redux Toolkit의 관례를 따른 것입니다.

// 이렇게 하면 Redux Toolkit을 사용하는 다른 개발자들도
// 쉽게 코드를 이해할 수 있습니다. 일관된 명명 규칙을 따르는 것이 중요합니다.
