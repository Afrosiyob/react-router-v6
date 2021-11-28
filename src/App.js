import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Routes, Navigate, Route } from 'react-router-dom';



const Admin = () => {
  return (
    <div>
      this is admin page
    </div>
  )
}

const Auth = () => {
  return (
    <div>
      this is auth page
    </div>
  )
}




function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/admin" /> } />
        <Route path="/admin" element={ <Admin /> } />
        <Route path="/auth" element={ <Auth /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
