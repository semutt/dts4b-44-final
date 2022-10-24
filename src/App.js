import './App.css';
import Sidebar from './components/Sidebar';
import './asssests/css/tailwind.css'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="flex bg-primary">
      <Sidebar className="flex-1"/>
      <NavBar className="flex-1"/>
    </div>
  );
}

export default App;
