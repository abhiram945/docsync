import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Nav";
import Sc from "./Sc";
import Os from "./Os";
const root = ReactDOM.createRoot(document.getElementById('root'));
const Docsync=()=>{
    const [course,setCourse]=useState(0);
    return <>
        <Nav course={course} setCourse={setCourse}/>
        {course===0 ? <Sc/>:<Os/>}
    </>
}
root.render(
    <Docsync/>
);