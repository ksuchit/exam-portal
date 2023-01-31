import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Portal from './component/Portal';
import Questions from './component/Questions';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Portal />}  />
          <Route path='/questions' element={<Questions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
