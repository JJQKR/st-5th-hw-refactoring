import React, { useState, useEffect, createContext, useContext } from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import TextContextProvider from "./context/TextContextProvider";

function App() {
  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextContextProvider>
        <TextInput />
        <TextList />
      </TextContextProvider>
    </div>
  );
}

export default App;
