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
                    <p>Exp No: {codeData.expNo} - {codeData.expName}</p>
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
            
            <h2>UNIT - 1</h2>
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
                <div className="videoInfoContainer">
                    <p>Topic: Ployalphabetic Cipher</p>
                    <div className="videoContainer">
                        <iframe src="https://www.youtube.com/embed/Ic4BzVggNY8?si=d2DCbelT47S3Y8cV" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="videoInfoContainer">
                    <p>Topic: Platfair Cipher (Part 1)</p>
                    <div className="videoContainer">
                        <iframe src="https://www.youtube.com/embed/UURjVI5cw4g?si=jKDIsPh4XOw9Pj0R" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="videoInfoContainer">
                    <p>Topic: Platfair Cipher (Part 2)</p>
                    <div className="videoContainer">
                        <iframe src="https://www.youtube.com/embed/whEJfas9MAI?si=ZqK6zhoNrI-7vMeQ" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="videoInfoContainer">
                    <p>Topic: Hill Cipher Encryption</p>
                    <div className="videoContainer">
                        <iframe src="https://www.youtube.com/embed/GY-psGvlKgA?si=Mpyd2aaU6BEtmf-p" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="videoInfoContainer">
                    <p>Topic: Hill Cipher Decryption</p>
                    <div className="videoContainer">
                        <iframe src="https://www.youtube.com/embed/JnIHfnaY-_w?si=H5v8JZFtSgb3KEvj" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="videoInfoContainer">
                    <p>Topic: Rail Fench Transposition Cipher</p>
                    <div className="videoContainer">
                        <iframe src="https://www.youtube.com/embed/knE4G8DGLoY?si=1vDLA6f28bYHLNRe" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="videoInfoContainer">
                    <p>Topic: Row Column Transposition Cipher</p>
                    <div className="videoContainer">
                        <iframe src="https://www.youtube.com/embed/cPQXaYUMOjQ?si=_yWNkaYvwP0JKYT8" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default Sc;