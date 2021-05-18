import './App.css';
import HomeVideo from './HomeVideo';
import PlayVideo from './PlayVideo'
import {BrowserRouter as Router, Route,Redirect,Switch} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={HomeVideo} />
        <Route path="/playvideo" exact component={PlayVideo} />
        <Route path="/*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
      </Router>
    
    </>
  );
}

export default App;
