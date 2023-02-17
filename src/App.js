import './App.css';
import Menu from './Menu/menu';
import Home from './Home/home';
import { BrowserRouter, Routes, Route, Outlet, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="MainApp">
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Outlet/>}/>
          <Route path="/watchList" element={<Outlet/>}/>
          <Route path="/history" element={<Outlet/>}/>
          <Route path="/settings" element={<Outlet/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
