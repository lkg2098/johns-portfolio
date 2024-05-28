import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route>
        <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
