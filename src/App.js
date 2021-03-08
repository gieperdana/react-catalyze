import './App.css';
import Home from "./pages/Home";
import Article from "./pages/Article";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/article/:id" component={Article} />
      <Route path="/" component={Home} />
    </Switch>
    </Router>
  );
}

export default App;
