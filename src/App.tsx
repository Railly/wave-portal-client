import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>My Wave Portal App</p>
        <span className="Wave-icon">👋</span>
      </header>
      <main className="App-main">
        <p>I made it with React, TypeScript and Solidity.</p>
        <button type="button">
          <p>Wave at me</p>
          <span className="Wave-icon">👋</span>
        </button>
      </main>
    </div>
  );
}

export default App;
