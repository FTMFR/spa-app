import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Courses from './components/Courses';
import MainCourse from './components/MainCourse';
import About from './components/About/About';
import './App.css';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseID' element={<MainCourse />} />
        
        <Route path='/about/*' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
