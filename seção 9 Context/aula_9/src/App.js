import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css"
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (


    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>


      </BrowserRouter>

    </div>



  );
}

export default App;
