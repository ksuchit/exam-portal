import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import FinishTest from './component/FinishTest';
import Portal from './component/Portal';
import Questions from './component/Questions';

function App() {
  return (
    <div className="App">
      <h1>exam portal</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Portal />}  />
          <Route path='/questions' element={<Questions />} />
          <Route path='/finish' element={<FinishTest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
