import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        Component propio Greeting.jsx
        <Greeting name='Bradley'></Greeting>
        Ejemplo Component Funcional
        <Greetingf name='Bradley'></Greetingf>
      </header>
    </div>
  );
}

export default App;
