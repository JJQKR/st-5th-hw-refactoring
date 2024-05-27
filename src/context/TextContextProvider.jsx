import React, { createContext, useEffect, useState } from "react";

const TextsContext = createContext(null);
//함수 컴포넌트 외부에서 TextContext 생성
//TextContextProvider 외부의 다른 컴포넌트에서 TextsContext를 사용하려면
//앞에 export 키워드 필요

const TextContextProvider = ({ children }) => {
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  return (
    <TextsContext.Provider value={{ texts, setTexts, onAddText }}>
      {children}
    </TextsContext.Provider>
  );
};
//TextInput과 TextList는 TextContextProvider의 직접적인 자식이 아니고
//그런데 {children}부분에 렌더링 되므로
//texts, setTexts, onAddText를 직접 import할 필요 없음
//대신 useContext 훅을 사용하여
//TextsContext에서 필요한 값들을 가져올 수 있다.

export default TextContextProvider;
