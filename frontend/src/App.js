import React, {lazy} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Dynamic Routing
const Home = lazy( ()=> import("./pages/Home") );
const Chat = lazy( ()=> import("./pages/Chat") );
const Groups = lazy( ()=> import("./pages/Groups") );
const Login = lazy( ()=> import("./pages/Login") );

function App() {
  return (
    <div className="">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route path="/chat/:chatId" element={<Chat/>}/>
          <Route path="/groups" element={<Groups/>}/>

          <Route path="/login" element={<Login/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
