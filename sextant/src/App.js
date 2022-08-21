import Banner from './components/Banner'
import Exibit from './components/Exibit'
import PublicIP from './components/PublicIP';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner siteTitle="Sextant" />
      <div className="wrapper">
        <Exibit title="Public IPv4 Address" ipComponent={<PublicIP ipVersion="ipv4" />} />
        <Exibit title="Public IPv6 Address" ipComponent={<PublicIP ipVersion="ipv6" />} />
      </div>
    </div>
  );
}

export default App;
