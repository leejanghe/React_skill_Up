import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './router/Home';
import Test1 from './router/Test1';
import styled from 'styled-components';

const Rayout = styled.div`
background: yellow;
display: grid;
gap: 10px;
grid-template-columns: 1.5fr 8.5fr;
`

const RayoutContents = styled.div`
background: yellow;
/* display: flex;
justify-content: center;
align-items: center; */
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
      </RayoutContents>
    </Rayout>
    </Router>
    
  );
}

export default App;
