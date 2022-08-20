import Banner from './components/Banner'
import Exibit from './components/Exibit'
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner siteTitle="Sextant" />
      <Exibit title="Data Points" />
    </div>
  );
}

export default App;
