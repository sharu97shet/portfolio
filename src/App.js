import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Profile/>
      <hr></hr>
      <Experience/>
      <Skills/>
      <Footer/>
     
    </div>
  );
}

export default App;
