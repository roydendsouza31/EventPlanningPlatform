import './App.css';
import Testimonials from './Components/Testimonails'; // Assuming Testimonials.js is in the same directory
// import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
            <Testimonials />
        </Router>
    </div>
  );
}

export default App;
