import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const scroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <BrowserRouter>
      <Header scroll={scroll}/>
      <main>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
        </div>
      </main>
    </BrowserRouter>
  );
}


export default App;
