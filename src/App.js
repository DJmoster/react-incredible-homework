import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />}/>
            <Route path='/Gallery' element={<Gallery />}/>
            <Route path='/Contact' element={<Contact />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}