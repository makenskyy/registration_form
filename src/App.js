import 'bootstrap/dist/css/bootstrap.min.css';

import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' exact component={Login}><Redirect to='/login' /></Route>

            <Route path='/register' exact component={Register} />
            <Route path='/login' exact component={Login} />
            <Route path='/home' exact component={Home} />

          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
