import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import './App.css';
import Home from './Home';
import Detail from './Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

