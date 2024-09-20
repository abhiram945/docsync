import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Nav";
import Sc from "./Sc";
const root = ReactDOM.createRoot(document.getElementById('root'));
const Docsync = () => {
    const [code, setCode] = useState(-1);
    useEffect(()=>{
       const inputCode = prompt("Enter passcode");
       setCode(inputCode);
    },[])
    return <>
            <Nav />
            {code==1 ? <Sc /> : code!=-1&&<h2 style={{marginTop:'5vh', textAlign:'center', paddingLeft:'1rem', paddingRight:'1rem'}}>Incorrect passcode, refresh the page to try again</h2>}
        </>

}
root.render(
    <Docsync />
);