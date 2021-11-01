import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Buy from './components/buy/Buy';

function App() {
  return (
    <div className="image-back">
      <div className="container ">
        <Header></Header>
        <Buy></Buy>
      </div>
    </div>
  );
}

export default App;
