import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => alert("SENT")}>Send</button>
        </p>
      </header>
    </div>
  );
}

export default App;
