import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* pages */
import Navbar from './components/Navbar';
import Main from './components/Main';
import Home from './components/Home';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
