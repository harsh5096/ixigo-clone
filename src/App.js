import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Offer from "./components/Offer";
import Search from "./components/Search";
import Footer from "./components/Footer";
import  "./App.css";

function App() {
  return (
  <>
  <div className="cover">
  <div className="snow"></div>
<Navbar/>
<Home/>
<Offer/>
<Search/>
<Footer/>
</div>
</>
  );
}

export default App;
