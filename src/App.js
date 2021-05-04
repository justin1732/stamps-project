import './App.css';
import Header from '../src/components/Header/Header.js'
// import Main from '../src/components/Main/Main.js';
import Footer from '../src/components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
     
      <Header />
       <header className="App-header">
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
      <Footer />
      </div>
  );
}

export default App;
