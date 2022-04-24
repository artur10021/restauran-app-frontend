import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from "./components/menu";
import RegisterPage from "./pages/register.page";
import LoginPage from "./pages/login.page";
import Basket from "./components/basket";
import AboutAs from "./components/aboutAs";
import "./app.scss"


function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
              <Route path="/menu" element={<Menu/>}/>
              <Route path="/basket" element={<Basket/>}/>
              <Route path="/aboutUs" element={<AboutAs/>}/>
              <Route path="/registration" element={<RegisterPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
