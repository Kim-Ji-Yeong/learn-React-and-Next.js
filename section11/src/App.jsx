import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import React from "react";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="search" element={<Search></Search>}></Route>
        <Route path="/country/:code" element={<Country></Country>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
