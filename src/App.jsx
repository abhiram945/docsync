import React, { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './App.css'
const Nav = () => {
    return <>
        <nav>
            <a className="flex alignCenter" href="/">
                <img src="assets/logo.jpg" alt="logo" />
                <h1>DocShare</h1>
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
                    <h1>Exp No : <span>01</span></h1>
                    <p>- Cipher Text Encryption and Decryption</p>
                </div>
                <div className="codeContainer">
                    <p onClick={(e)=>{setCopy(!copy);navigator.clipboard.writeText(exp1CodeString)}}>{copy ? 'Copied':'Copy code'}</p>
                    <SyntaxHighlighter language="python" style={atomOneDark} customStyle={{paddingLeft:'1rem', }}>
                        {exp1CodeString}
                    </SyntaxHighlighter>
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