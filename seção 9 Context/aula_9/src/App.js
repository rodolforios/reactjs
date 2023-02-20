import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Navbar from './Navbar.js';

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
