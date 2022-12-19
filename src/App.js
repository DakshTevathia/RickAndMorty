import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Characters from "./Components/WikiMain/Characters/Characters";
import MainPage from './Components/MainPage';
import Episode from "./Components/Episodes/Episode";
import Location from './Components/Location/Location';
import Footer from "./Components/Footer/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import CharacterCard from './Components/Cards/CharacterCard';
import image from '../src/background.jpg'

function App() {

  return (
    <div className="App">
      <img src={image} alt='bgImage' style={{
        zIndex: '-5',
        position: 'fixed',
        height: '100%',
        width: '100%',
        opacity: '0.65'
      }} />
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/:id" element={<CharacterCard />}></Route>
        <Route exact path="/Characters" element={<Characters />}></Route>
        <Route exact path="Characters/:id" element={<CharacterCard />}></Route>
        <Route exact path="/Episode" element={<Episode />}></Route>
        <Route exact path="Episode/:id" element={<CharacterCard />}></Route>
        <Route exact path="/Location" element={<Location />}></Route>
        <Route exact path="Location/:id" element={<CharacterCard />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
