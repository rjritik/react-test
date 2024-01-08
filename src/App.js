import "./App.css";
import AppFooter from "./components/AppFooter/footer";
import AppNavbar from "./components/AppNavbar/navbar";
import Login from "./components/Login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About/about";

function App() {
  return (
    <div>
      <Login />
      {/* <Routes>
        <Route exact path="/" element={Login}></Route>
        <Route path="/about" element={About}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
