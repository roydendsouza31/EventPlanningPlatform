import "./App.css";
import Signup from "./components/signup/signup";
import Navbar from "./components/navbar/navbar";
import Homepage from "./components/homepage/homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
