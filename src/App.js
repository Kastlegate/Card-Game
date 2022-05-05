import './style/App.css';
import Gameboard from './components/Gameboard.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Gameboard />
    </div>
  );
}

export default App;
