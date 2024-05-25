import React, {lazy} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectRoute from "./components/auth/ProtectRoute";
// import NotFound from "./pages/NotFound";


// Dynamic Routing
const Home = lazy( () => import("./pages/Home") );
const Chat = lazy( () => import("./pages/Chat") );
const Groups = lazy( () => import("./pages/Groups") );
const NotFound = lazy( () => import("./pages/NotFound") );

let user = false ;

export default function App() {
  return (

      <BrowserRouter>
 
        <Routes>

          {/* Outlet :- If the parent route matched exactly, it will render a child index route out of these */}
          {/* if the user is true i.e, logged in, then show any of these routes */}
          <Route element={<ProtectRoute user={user}/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/chat/:chatId" element={<Chat/>}/>
            <Route path="/groups" element={<Groups/>}/>
          </Route>
          
          
          <Route path="/login" element={
            // even if the user is true, ProtectRoute will get false and redirect to '/' 
            // i.e, if the user is on home page(logged in), he will not redirect to login page
            <ProtectRoute user={!user} redirect="/">
              <Login/>
            </ProtectRoute>}
          />
          <Route path="/signup" element={<Signup/>}/>

          {/* Default Route:- not found page */}
          <Route path="*" element={<NotFound/>}/>

        </Routes> 

      </BrowserRouter>

  );
}

