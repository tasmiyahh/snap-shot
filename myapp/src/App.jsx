import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from "react-router-dom";
import Navbar from "./components/navbar";

import './App.css';
import Mountain from "./components/mountain";
import Beaches from "./components/beaches";
import Food from "./components/food";

function App() {
  return (
   <>
   <h1 className="mainhead">
     SnapShot
   </h1>
    <div className="main">
    <Router>
          <Navbar/>
            <Routes>
                <Route path="/food"  element={<Food/>}/>
                 <Route path = "/beaches" element={<Beaches/>} />
                 <Route path="/mountain" element={<Mountain/>} /> 
               
            </Routes>
        </Router>
        </div>
   </>
  );
}

export default App;
