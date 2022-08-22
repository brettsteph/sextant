import Banner from './components/Banner'
import Exibit from './components/Exibit'
import PublicIP from './components/PublicIP';
import PacketLatency from './components/PacketLatency'
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner siteTitle="Sextant" />
      <div className="wrapper">
        <Exibit title="Public IPv4 Address" Component={<PublicIP url="https://api.ipify.org?format=json" />} />
        <Exibit title="Public IPv6 Address" Component={<PublicIP url="https://api64.ipify.org?format=json" />} />
        <Exibit title="Pylon Packet Latency" Component={<PacketLatency url="ws://localhost:55455" />} />
      </div>
    </div>
  );
}

export default App;
