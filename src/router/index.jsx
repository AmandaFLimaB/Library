import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Author from "../pages/Author";
import Book from "../pages/Book";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/author" element={<Author />}/>
            <Route path="/book" element={<Book />}/>
        </Routes>
    )
}