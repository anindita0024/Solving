
import './App.css';
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Sitting from './pages/sitting/Sitting';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,Link
} from "react-router-dom";



function App() {

  const user = false;
  return (
    <Router>
      <Topbar/>
      <Routes>
       <Route exact path="/" element={<Home />}></Route>
       <Route path="/register" element={ user ? <Home/> : <Register/>}></Route>
       <Route path="/login" element={ user ? <Home/> : <Login/>}></Route>
       <Route path="/write" element={ user ? <Write/> : <Register/>}></Route>
       <Route path="/sitting" element={user ? <Sitting/> : <Register/>}></Route>
       <Route path="/post/:postId" element={<Single/>}></Route>
       
      </Routes>
      
    
    </Router>
    
  );
}

export default App;
