import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./screens/Login";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from "./screens/Signup";
//import RegisterUser from "./screens/Ragister"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Foodcard from "./components/Foodcard"


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
<Route path='/:name' element={<Home />} />
</Route>
<Route path='/food' element={<Foodcard />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          
          


        </Routes>
      </div>
    </Router>
  );
}

export default App;
