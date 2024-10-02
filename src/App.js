
import './App.css';
import TaxaMetabolicaBasal from './components/views/TaxaMetabolicaBasal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/views/Home';
import Cutaneo from './components/views/Cutaneo';
import PageNotFound from './components/PageNotFound';
import Main from './components/views/Main';

function App() {
  return (
    <div className="App d-flex flex-column">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Main/>}/>
            <Route path="calculo-tmb" element={<TaxaMetabolicaBasal/>}/>
            <Route path="calculo-cultaneo" element={<Cutaneo/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
    
    
    
  );
}
export default App;
