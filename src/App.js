import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.css'
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Profile/>
      <hr></hr>
      <About/>
      
      <Skills/>
     <Experience/> 
     
     
    </div>
  );
}

export default App;
