import React, { createContext, useState } from "react";

const TextsContext = createContext(null);

const onAddText = (text) => {
  setTexts((prevTexts) => [...prevTexts, text]);
};

const TextContextProvider = ({ children }) => {
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  return (
    <TextsContext.Provider value={{ texts, setTexts, onAddText }}>
      {children}
    </TextsContext.Provider>
  );
};

// 위 과정을 App.jsx에서 써도 되지만 그러면 App.jsx가 무거워지고
// 선택적으로 Context를 사용하기 불편함!

export default TextContextProvider;
