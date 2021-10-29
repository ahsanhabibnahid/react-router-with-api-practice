import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './component/NotFound/NotFound';
import FriendDetail from './component/FriendDetail/FriendDetail';

function App() {
  return (

    <Router>
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/friend/:friendId'>
          <FriendDetail />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
