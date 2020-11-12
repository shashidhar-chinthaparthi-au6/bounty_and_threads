import FaceBookButton from "./components/FaceBookButton"
import React from "react"
import './App.css';
import InstagramButton from "./components/InstagramButton";

function App() {
  return (
    <div className="App">
      <h1>Login with facebook</h1>
     <FaceBookButton/>
     <h1>Login with instagram</h1>
     <InstagramButton/>
    </div>
  );
}

export default App;
