import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Sc from "./Sc";
import Redirect from "./Redirect";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
            <Nav/>
        <Routes>
            <Route path="docsync/*" element={<Redirect/>}/>
            <Route path="docsync/sc" element={<Sc/>}/>
        </Routes>
    </BrowserRouter>
);