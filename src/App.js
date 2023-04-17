import logo from './logo.svg';
import './App.scss';
import Navbar from './components/header/Navbar';
import PageDetails from './components/pages/Details';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PageDetails />
    </div>
  );
}

export default App;
