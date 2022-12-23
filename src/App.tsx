import Home from './components/Home';
import TopNav from './components/TopNav';
import Projects from './components/Projects';

import './App.css';

function App() {
  return (
    <div className="App">
      <TopNav>
        <Home />
        <Projects />
      </TopNav>
    </div>
  );
}

export default App;
