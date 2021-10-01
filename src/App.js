import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom'

document.title = "RateKu"
function App() {
  return (
    <Router>
        <Route exact path="/">
            <Homepage/>
        </Route>
    </Router>
  );
}

export default App;
