import './App.css';
import { Routes, Route } from 'react-router';
import Urunler from './Components/Urunler';
import NavbarComp from './Components/NavbarComp';
import Login from './Pages/Login';

function App() {
  return (
    <>
      <NavbarComp></NavbarComp>
      <Routes>
        <Route path='/' element={<h1>Naber?</h1>}></Route>
        <Route path='urunler' element={<Urunler></Urunler>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
