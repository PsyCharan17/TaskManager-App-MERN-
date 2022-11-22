import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyTasks from "./screens/MyTasks/MyTasks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreeen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/mytasks" element={<MyTasks />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
