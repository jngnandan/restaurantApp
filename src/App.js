import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Cart from "./components/Login";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/cart" element={<Cart/>}/>

      </Routes>
    </BrowserRouter>
  )
}
