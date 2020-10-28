import { Switch, Route } from 'react-router-dom';
import CountrySelector from './Country/Country';
import Login from './Login/Login';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/countries' component={CountrySelector} />
      </Switch>
    </div>
  );
}

export default App;
