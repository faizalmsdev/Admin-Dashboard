import './App.css';
import { Navigate, Route, Routes } from "react-router";
import Home from './Pages/home/index';
import Contact from './Pages/contactus/Contact';
import About from './Pages/about/About';

function App({roles}) {
  return (
    <>
      <Routes>
        <Route path='*' element={<Navigate to={"/"} /> } />
        <Route path="/" element={<Home roles={roles} />} />
        {/* <Route path='/Contact-us' element={ <Contact /> } /> */}
        {/* <Route path='/About' element={ <About /> } /> */}
      </Routes>
    </>
  );
}

export default App;
