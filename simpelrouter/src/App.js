import './App.css';
import { Navbar } from './components/partials/nav';
import { Router } from './components/router/approuter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      
    </div>
  );
}

export default App;
