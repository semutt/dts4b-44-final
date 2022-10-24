import './App.css';
import Sidebar from './components/Sidebar';
import './asssests/css/tailwind.css'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      
      <div className="flex flex-col flex-none w-full">
        <NavBar className="flex-1"/>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
