import React from "react";
import { useSelector } from "react-redux";
//userSelector는 Redux store의 상태를 구독하고 접근하게 해주는 훅

const TextList = () => {
  const texts = useSelector((state) => state.text.texts);
  //useSelector를 이용, Redux store의 상태를 가져옴
  //userSelctor(여기는 selector의 함수로 값을 가져옴)
  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
};

export default TextList;

//useSelector를 사용하여 texts 상태를 가져오고
//이를 기반으로 텍스트 목록을 렌더링하고 있음
//결국 이 컴포넌트는 Redux Store에 저장된 텍스트 목록을 가져와
//화면에 렌더링하는 역할임

//얘도 js로 바꾸나?
