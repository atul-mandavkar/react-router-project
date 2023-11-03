//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <About />
    </div>
  );
}

export default App;
