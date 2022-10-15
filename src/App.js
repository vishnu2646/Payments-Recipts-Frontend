import './App.css';
import Sidenav from './Components/Sidenav';
import TopNav from './Components/TopNav';
import Home from './Pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Income from './Pages/Income';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Sidenav />
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/income" element={<Income />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
