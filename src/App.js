import './App.scss';

import HomePage from "./page/HomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <div>
        <Router>
          <Switch>
            <Route  path="/" component={HomePage}/>
            <HomePage/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
