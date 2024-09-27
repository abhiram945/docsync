import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Nav";
import Sc from "./Sc";
const root = ReactDOM.createRoot(document.getElementById('root'));
const Docsync = () => {
    return <>
        <Nav />
        <Sc />
    </>

}
root.render(
    <Docsync />
);