import Sidebar from './components/Sidebar';
import './asssests/css/tailwind.css'
import NavBar from './components/NavBar';
import CountryList from './containers/CountryList';
import PlayersCard from './components/PlayersCard';

function App() {
  return (
    <div className="flex h-full bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col w-full">
        <NavBar className="flex-1"/>
        <div className="flex flex-row w-full">
          <Sidebar />
          <CountryList />
          <PlayersCard />
      </div>
    </div>
  </div>
  );
}

export default App;
