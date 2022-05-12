import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from './router/Home';
import Test1 from './router/Test1';

function App() {
  return (
    
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>

    <Routes>
      <Route path="test1" element={<Test1/>}/>
    </Routes>
    </Router>
    
  );
}

export default App;
