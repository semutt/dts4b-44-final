import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './asssests/css/tailwind.css'
import Countries from './pages/Countries';
import Home from './pages/Home';
import Players from './pages/Players';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path='countries' element={<Countries />} />
          <Route path='players' element={<Players />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
