import React, { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './App.css'
const Nav = () => {
    return <>
        <nav>
            <a className="flex alignCenter" href="/docsync/">
                <img src="assets/logo.jpg" alt="logo" />
                <h1>DocSync</h1>
            </a>
        </nav>
    </>
}

const Main = () => {
    
const exp1CodeString = `name = input("Enter word: ")

encrypted = ""
decrypted = ""
key = int(input("Enter key (0-9): "))
for letter in name:
    encrypted += chr(ord(letter) + key)
print("Encrypted:", encrypted)
for letter in encrypted:
    decrypted += chr(ord(letter) - key)
print("Decrypted:", decrypted)


name = input("Enter word: ")
encrypted = ""
decrypted = ""
for letter in name:
    encrypted += str(ord(letter) - ord('a')) + " "
print("Encrypted:", encrypted.strip())
arr = encrypted.strip().split(" ")
for num in arr:
    decrypted += chr(int(num) + ord('a'))
print("Decrypted:", decrypted)


name = input("Enter word: ")
encrypted = ""
decrypted = ""
print("Enter keys for encryption (0-9):")
for letter in name:
    key = int(input(f"Key for '{letter}': "))
    encrypted += chr(ord(letter) + key)
print("Encrypted:", encrypted)
print("Enter keys for decryption (must match the encryption keys):")
for letter in encrypted:
    key = int(input(f"Key for '{letter}': "))
    decrypted += chr(ord(letter) - key)
print("Decrypted:", decrypted)
`
    const [copy, setCopy]=useState(false);
    
    return <>
        <main className="mainContainer">
            <div className="expContainer">
                <div className="headingContainer">
                    <p>Exp No: 01 - Cipher Text Encryption and Decryption</p>
                </div>
                <div className="codeContainer">
                    <p onClick={(e)=>{setCopy(!copy);navigator.clipboard.writeText(exp1CodeString)}}>{copy ? 'Copied':'Copy code'}</p>
                    <SyntaxHighlighter language="python" style={docco} customStyle={{paddingLeft:'1rem', }}>
                        {exp1CodeString}
                    </SyntaxHighlighter>
                </div>
            </div>
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

const App = () => {
    return <>
        <Nav />
        <Main />
    </>
}

export default App;