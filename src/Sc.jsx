import React, { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import codesData from "./scCodes";
import './Sc.css'

const Sc = () => {
    const [copy, setCopy]=useState(false);
    
    return <>
        <main className="mainContainer">
            {
                codesData.map((codeData, index)=><div className="expContainer">
                <div className="headingContainer">
                    <p>Exp No: {index+1} - {codeData.expName}</p>
                </div>
                <div className="codeContainer">
                    <p onClick={(e)=>{setCopy(!copy);navigator.clipboard.writeText(codeData.code)}}>{copy ? 'Copied':'Copy code'}</p>
                    <SyntaxHighlighter language="python" style={docco} customStyle={{paddingLeft:'1rem', }}>
                        {codeData.code}
                    </SyntaxHighlighter>
                </div>
            </div>
                
                )
            }
            
            <h2>Don't have enough time to find the correct video ? We got it...</h2>
            <div className="videosContainer">
                <div className="videoInfoContainer">
                    <p>Topic: Cryptography and types</p>
                    <div className="videoContainer">
                        <iframe src="https://www.youtube.com/embed/6_Cxj5WKpIw?si=m_eavxEia78oo4bC" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="videoInfoContainer">
                    <p>Topic: Caesar Cipher (Part 1)</p>
                    <div className="videoContainer">
                        <iframe src="https://www.youtube.com/embed/JtbKh_12ctg?si=PmyCLcLhPlAwXofc" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="videoInfoContainer">
                    <p>Topic: Caesar Cipher (Part 2)</p>
                    <div className="videoContainer">
                        <iframe src="https://www.youtube.com/embed/na5rapg1XsI?si=r13kwEpyLWE8_RW-" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="videoInfoContainer">
                    <p>Topic: Monoalphabetic Cipher</p>
                    <div className="videoContainer">
                        <iframe src="https://www.youtube.com/embed/J-utjSeUq_c?si=Xj8DLEpnjSi0c1BU" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default Sc;