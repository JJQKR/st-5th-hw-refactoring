//1. context 브랜치에서,
// useState, useEffect로 관리하던 것을 context api로 리팩터링합니다.
//(useContext)

//2. redux 브랜치에서 context api 로 리팩터링된 것을 redux 로 리팩터링합니다.
//~~~~~~~~~~~~~~~~~~`

import React, { useState, useEffect } from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput onAddText={onAddText} />
      <TextList texts={texts} />
    </div>
  );
}

export default App;
