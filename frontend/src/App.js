import React, {lazy} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {useDispatch} from "react-redux"
import { SocketProvider } from "./utils/socket";


import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectRoute from "./components/auth/ProtectRoute";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import NotFound from "./pages/NotFound";
import Groups from "./pages/Groups";
import PrivateRoute from "./components/auth/PrivateRoute";
import UserManagement from "./pages/admin/UserManagement";
import ChatManagement from "./pages/admin/ChatManagement";
import MessageManagement from "./pages/admin/MessageManagement";

let user = true;


export default function App() {

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${server}/api/v1/user/me`, { withCredentials: true })
      .then(({ data }) => dispatch(userExists(data.user)))
      .catch((err) => dispatch(userNotExists()));
  }, [dispatch]);


  return (

 
        <Routes>

          {/* Outlet :- If the parent route matched exactly, it will render a child index route out of these */}
          {/* if the user is true i.e, logged in, then show any of these routes */}


          <Route element={
            <SocketProvider>
              <ProtectRoute user={user}/>
            </SocketProvider>
          }>
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


          
          <Route path="/admin" element={<AdminLogin/>}/>

          <Route path="/admin/dashboard" element = {
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }/>

          <Route path="/admin/chats" element = {
            <PrivateRoute>
              <ChatManagement/>
            </PrivateRoute>
          }/>

          <Route path="/admin/messages" element = {
            <PrivateRoute>
              <MessageManagement/>
            </PrivateRoute>
          }/>

          <Route path="/admin/users" element = {
            <PrivateRoute>
              <UserManagement/>
            </PrivateRoute>
          }/>

          

          {/* Default Route:- not found page */}
          <Route path="*" element={<NotFound/>}/>

        </Routes> 

  );
};