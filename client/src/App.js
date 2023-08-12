import './App.css';

//Component imports
import Navbar from './Components/navbar/Navbar';
import LandingSection from './Components/landing section/Landing';
import SuperchainNetworkSection from './Components/superchain network/SuperchainNetworkSection';
import AboutWeb3 from './Components/aboutWeb3/AboutWeb3';
import NetworksSupportedSection from './Components/networks supported/NetworksSupportedSection';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingSection />
      <AboutWeb3 />
      <SuperchainNetworkSection />
      <NetworksSupportedSection />
      <Footer />
    </div>
  );
}

export default App;
