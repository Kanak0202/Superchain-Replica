import './App.css';

//Component imports
import Navbar from './Components/navbar/Navbar';
import LandingSection from './Components/landing section/Landing';
import SuperchainNetworkSection from './Components/superchain network/SuperchainNetworkSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingSection />
      <SuperchainNetworkSection />
    </div>
  );
}

export default App;
