import './App.css';
import Homepage from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Login or Signup Page</h1>
        <BrowserRouter>
        <Routes>

          <Route path='/' element={<Login/>}/>
          <Route path='/home' element ={<Homepage/>}/>
          <Route path='/signup' element ={<Signup/>}/>

          </Routes></BrowserRouter>
       </header>
    </div>
  );
}

export default App;
