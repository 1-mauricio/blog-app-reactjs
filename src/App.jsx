import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/blog/:id" element={<Blog />} />
            </Routes>
        </div>
    );
}

export default App;
