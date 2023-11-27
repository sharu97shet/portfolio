import logo from './logo.svg';
import './App.css';

 import  './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/bootstrap-icons.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Location from './components/Location';
function App() {
  return (
    <div className="App">
      <Profile/>  
      <hr></hr>
      <About/>
      <hr></hr>
      
      <Skills/>
     <Experience/> 
     <hr></hr>
     <Contact/>
     <hr></hr>
     <Location/>
     <Footer/>
     
    </div>
  );
}

export default App;
