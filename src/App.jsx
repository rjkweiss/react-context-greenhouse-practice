import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';


function App() {

  return (
    <>
    <h1>Hello from App!</h1>
    <Navigation />
    <Routes>
      <Route path='/' element={<h1>Placeholder for GreenHouse</h1>} />
      <Route path='/thermometer' element={<h1>Placeholder for Thermometer</h1>} />
      <Route path='/hygrometer' element={<h1>Placeholder for Hygrometer</h1>} />
    </Routes>
    </>
  )
}

export default App
