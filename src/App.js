import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Header/>
    
      <Home/>
      <About/>

      <Footer/>
    </div>
  );
}

export default App;
