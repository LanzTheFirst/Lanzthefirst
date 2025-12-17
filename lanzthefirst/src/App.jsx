import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import RateCard from "./components/RateCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Portfolio />
      <RateCard />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
