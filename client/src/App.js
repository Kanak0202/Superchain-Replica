import './App.css';

//Component imports
import Navbar from './Components/navbar/Navbar';
import LandingSection from './Components/landing section/Landing';
import SuperchainNetworkSection from './Components/superchain network/SuperchainNetworkSection';
import AboutWeb3 from './Components/aboutWeb3/AboutWeb3';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingSection />
      <AboutWeb3 />
      <SuperchainNetworkSection />
    </div>
  );
}

export default App;
