import logo from './stamp.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my app for checking addresses!
        </p>
        <a
          className="App-link"
          href="www.justinptucker.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's check an address below!
        </a>
      </header>
    </div>
  );
}

export default App;
