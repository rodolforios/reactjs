
import './App.css';
// 1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// pages
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from "./pages/Info.js";
import NotFound from "./pages/NotFound";
import { SearchForm } from "./components/SearchForm";
import Search from "./pages/Search";



function App() {

  return (
    <div className="App">

      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - links com react router */}
        <Navbar />
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - rota dinamica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 9 search params */}
          <Route path="/search" element={<Search />} />
          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* 7  - no match route */}
          <Route path="*" element={<NotFound />} />

        </Routes>

      </BrowserRouter>

      <ul>



      </ul>

    </div>
  );
}

export default App;
