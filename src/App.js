import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="bg-[#030812]">
      <header className="App-header">
        <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
