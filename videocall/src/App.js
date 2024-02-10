import './index.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import RoomPage from './pages/room';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/room/:roomid' element={<RoomPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
