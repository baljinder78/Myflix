import Welcome from './components/NewUsers/Welcome';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sigin from './components/Sigin/Sigin';
import Signup from './components/Signup/Signup'
import Homepage from './components/Main/Homepage';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Welcome />} />
          {/* <Sigin/> */}
          {/* <Welcome/> */}
          <Route exact path='/sigin' element={<Sigin />} />
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/home" element={<Homepage/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
