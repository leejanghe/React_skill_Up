import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './router/Home';
import styled from 'styled-components';
import DataLength from './router/DataLength';
import Recycle from './router/Recycle';
import Classification from './router/Classification';
import Paginate from './router/Paginate';

const Rayout = styled.div`
display: grid;
grid-template-columns: 2fr 8fr;
`

const RayoutContents = styled.div`
background: #F9F3EE;
padding: 2rem 2rem 0 2rem;
/* margin-left: 1rem; */
height: 96%;
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
      <Route path="study1" element={<DataLength/>}/>
    </Routes>

    <Routes>
      <Route path="study2" element={<Recycle/>}/>
    </Routes>

    <Routes>
      <Route path="study3" element={<Classification/>}/>
    </Routes>

    <Routes>
      <Route path="study4" element={<Paginate/>}/>
    </Routes>


      </RayoutContents>
    </Rayout>
    </Router>
    
  );
}

export default App;
