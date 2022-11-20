import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';




function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact active path="/" element={<Home/>} />
          <Route exact path='/product' element={<Products/>}/>
          <Route exact path='/products/:id' element={<Product/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
 
    </>
  );
}

export default App;
