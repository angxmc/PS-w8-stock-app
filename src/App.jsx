
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Stock from "./components/Stock";
import About from "./components/About";
import Dashboard from "./components/Dashboard";

function App() {

  return (
 
      <>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/stocks' element={<Dashboard />}/>
          <Route path='/stocks/:symbol' element={<Stock/>}/>
        </Routes>
      </>
  
  );
}

export default App;
