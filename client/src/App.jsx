import './App.css';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
    <Routes>
      <Route path='/home' element={<h1>Naber?</h1>}></Route>
    </Routes>
    </>
  );
}

export default App;
