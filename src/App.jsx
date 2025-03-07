import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Greenhouse from './components/greenhouse/Greenhouse/Greenhouse';
import Thermometer from './components/Thermometer/Thermometer';


function App() {

  return (
    <>
    {/* nav component for the whole application */}
    <Navigation />

    {/* routes for navigation */}
    <Routes>
      <Route path='/' element={<Greenhouse/>} />
      <Route path='/thermometer' element={<Thermometer/>} />
      <Route path='/hygrometer' element={<h1>Placeholder for Hygrometer</h1>} />
    </Routes>
    </>
  );
}

export default App;
