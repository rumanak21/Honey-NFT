import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";

function App() {
  return (
    <div className=" bg-[#030812] bg-[url('/src/img/BG1.png')] bg-auto bg-no-repeat bg-right-top">
      <div className="container mx-auto bg-[url('/src/img/BG2.png')] bg-no-repeat bg-[left_top_40rem] bg-[length:600px_700px] ">
        <div className="bg-[url('/src/img/BG3.png')] bg-no-repeat bg-[center_top_105rem] bg-[length:1010px_1010px]">
          <div className="bg-[url('/src/img/BG4.png')] bg-no-repeat bg-[right_bottom_70rem] bg-[length:1000px_1000px]">
            <div className="bg-[url('/src/img/BG5.png')] bg-no-repeat bg-[left_bottom_25rem] bg-[length:400px_700px]">
              <header className="App-header">
                <Routes>
                  <Route path="/" element={<Home></Home>}></Route>
                </Routes>
              </header>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
