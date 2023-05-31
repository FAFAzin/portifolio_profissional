import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* pages */
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Main from './components/Main';

function App() {

  return (
    <div>
      <Navbar />
      <Main />
    </div>
  )
}

export default App
