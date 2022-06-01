import './App.css';
import Navbar from './components/navbar/Navbar';
import Api from './api';
import MainColumn from './components/mainColumn/MainColumn';
import { useEffect, useState } from 'react';

function App() {

  const [mainSections, setMainSections] = useState();

  useEffect(() => {
    const getMainSections = async () => {
      var sections = await Api.getMainSections();
      setMainSections(sections);
    }
    getMainSections();
  }, []);

  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <MainColumn sections={mainSections} />
      </main>
    </div>
  );
}

export default App;
