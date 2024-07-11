import React from "react";
import ReceiveData from "./ReceiveData";
import SendData from "./SendData";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route index Component={SendData}/>
    <Route path="/receivedata" Component={ReceiveData}/>
  </Routes>
  </BrowserRouter>
  );
  
}

export default App;
