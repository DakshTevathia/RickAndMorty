import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Characters from "./Components/WikiMain/Characters/Characters";
import MainPage from './Components/MainPage';
import Episode from "./Components/Episodes/Episode";
import Location from './Components/Location/Location';
import Footer from "./Components/Footer/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/Characters" element={<Characters />}></Route>
        <Route exact path="/Episode" element={<Episode />}></Route>
        <Route exact path="/Location" element={<Location />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
