import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './router/Home';
import Test1 from './router/Test1';
import styled from 'styled-components';
import DataLength from './router/DataLength';
import Recycle from './router/Recycle';

const Rayout = styled.div`
display: grid;
grid-template-columns: 2fr 8fr;
`

const RayoutContents = styled.div`
background: #F9F3EE;
padding: 2rem;
/* height: 100vh; */
`

function App() {
  return (
    
    <Router>
    <Rayout>
      <Navbar />
      <RayoutContents>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>

    <Routes>
      <Route path="test1" element={<Test1/>}/>
    </Routes>

    <Routes>
      <Route path="study1" element={<DataLength/>}/>
    </Routes>

    <Routes>
      <Route path="study2" element={<Recycle/>}/>
    </Routes>




      </RayoutContents>
    </Rayout>
    </Router>
    
  );
}

export default App;
