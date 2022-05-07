import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/main.page";
import RegisterPage from "./pages/register.page";
import LoginPage from "./pages/login.page";
import "./app.scss"



function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
              <Route path="/*" element={<MainPage/>}/>
              <Route path="registration" element={<RegisterPage/>}/>
              <Route path="login" element={<LoginPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
