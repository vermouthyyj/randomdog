import './App.css';
import HomePage from "./HomePage/HomePage";
import {Route , BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
    <Route exact path="/randomdog" component={HomePage}></Route>
    </Router>
  );
}

export default App;
