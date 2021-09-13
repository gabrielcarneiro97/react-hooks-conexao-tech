import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import ClickUseRef from './pages/ClickUseRef';
import LoginUseRef from './pages/LoginUseRef';
import LoginUseState from './pages/LoginUseState';
import TimerUseRef from './pages/TimerUseRef';
import PassErrorUseMemo from './pages/PassErrorUseMemo';
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <div style={{ height: 16, marginLeft: 20, marginTop: 10 }}>
        <Link to="/">Início</Link>
      </div>
      <div style={{ margin: 20 }}>
        <Switch>
          <Route path="/login-use-state" exact component={LoginUseState} />
          <Route path="/login-use-ref" exact component={LoginUseRef} />
          <Route path="/click-use-ref" exact component={ClickUseRef} />
          <Route path="/timer-use-ref" exact component={TimerUseRef} />
          <Route path="/pass-use-memo" exact component={PassErrorUseMemo} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
