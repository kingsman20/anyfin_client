import { Switch, Route } from 'react-router-dom';
import Country from './Country/Country';
import Login from './Login/Login';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/countries' component={Country} />
      </Switch>
    </div>
  );
}

export default App;
