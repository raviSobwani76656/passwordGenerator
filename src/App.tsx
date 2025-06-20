import { useState, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");

  const [specialCharacter, setSpecialCharacter] = useState(false);

  const [numbers, setNumbers] = useState(false);

  const passwordRef = useRef(null);

  function copyPassword() {
    if (passwordRef.current) {
      passwordRef.current.select();
      navigator.clipboard.writeText(passwordRef.current.value);
      alert("Password Copied To Clipboard");
    }
  }

  function generatePassword() {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let SpecialCharacters = "!@#$%^&*()_+{}[]";
    let Numbers = "1234567890";
    let pass = "";

    if (specialCharacter) {
      characters += SpecialCharacters;
    }
    if (numbers) {
      characters += Numbers;
    }

    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * characters.length);

      console.log(randomNumber);

      pass = pass + characters[randomNumber];
    }

    setPassword(pass);
  }
  return (
    <>
      <h1> Passsword Generator </h1>
      <input
        type="range"
        min={4}
        max={12}
        placeholder="Enter the password"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />
      <label>Special Characters</label>
      <input
        type="checkbox"
        onChange={() => setSpecialCharacter(!specialCharacter)}
      />
      <label>Numbers</label>
      <input type="checkbox" onChange={() => setNumbers(!numbers)} />
      <button onClick={generatePassword}>Generate Password</button>
      <input type="text" value={password} readOnly ref={passwordRef} />
      <button onClick={copyPassword}>Copy</button>
      if(){}
    </>
  );
}

export default App;
