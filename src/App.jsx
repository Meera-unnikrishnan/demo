
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Login from './pages/Login'
import CustomerRegistration from './pages/CustomerRegistration';
import Home from "./pages/Home";
import Category from "./components/Category";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registration' element={<CustomerRegistration/>} />
        <Route path='/category' element={<Category/>} />
      </Routes>
    </Router>
  );
}

export default App;