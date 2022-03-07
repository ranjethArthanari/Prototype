import React, { useState } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import styled from "styled-components"
import LoginRender from "./components/login"
import HomeRender from "./components/home"
const AppContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: co;
align-items: center;
justify-content: center;
`

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<LoginRender/>}></Route>
      <Route path="/home" element = {<HomeRender/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

/* const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); */

export default App;