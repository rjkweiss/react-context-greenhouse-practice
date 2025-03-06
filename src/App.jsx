import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Greenhouse from './components/greenhouse/Greenhouse/Greenhouse';


function App() {

  return (
    <>
    {/* nav component for the whole application */}
    <Navigation />

    {/* routes for navigation */}
    <Routes>
      <Route path='/' element={<Greenhouse/>} />
      <Route path='/thermometer' element={<h1>Placeholder for Thermometer</h1>} />
      <Route path='/hygrometer' element={<h1>Placeholder for Hygrometer</h1>} />
    </Routes>
    </>
  );
}

export default App;
