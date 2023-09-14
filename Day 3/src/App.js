import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import'./assets/css/app.css'
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
