import './App.css';
import Home from "./pages/Home";
import Article from "./pages/Article";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/article">
        <Article />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
