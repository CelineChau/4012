import './App.css';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init();
  return (
    <Home />
  );
}

export default App;
