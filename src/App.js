import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className=" bg-[#030812] bg-[url('/src/img/BG1.png')] bg-auto bg-no-repeat bg-right-top">
      <div className="container mx-auto  ">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
        </header>
      </div>
    </div>
  );
}

export default App;
