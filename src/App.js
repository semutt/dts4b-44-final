import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './asssests/css/tailwind.css'
import Countries from './pages/Countries';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='countries' element={<Countries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
