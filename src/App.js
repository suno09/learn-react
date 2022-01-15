import logo from './logo.svg';
import './App.css';
import HelloWorldClass from "./component/helloworld.component";
import HelloWorldFunction from "./component/helloworld.component";

function App() {
  return (
    <div className="App">
      <HelloWorldFunction name="suno" />
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  );
}

export default App;
