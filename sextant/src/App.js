import Banner from './components/Banner'
import Exibit from './components/Exibit'
import PublicIP from './components/PublicIP';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner siteTitle="Sextant" />
      <Exibit title="Public IP4 Address" ipComponent={<PublicIP ipVersion="ipv4"/>} />
      <Exibit title="Public IP6 Address" ipComponent={<PublicIP ipVersion="ipv6"/>} />
    </div>
  );
}

export default App;
