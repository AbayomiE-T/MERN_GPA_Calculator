import Navbar from './components/Navbar'
import Register from './components/auth/Register'
import CourseList from './components/CourseList'
import { useEffect } from 'react';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'

import { Provider } from 'react-redux'
import store from './store';
import { loadUser } from './actions/authActions'
import AddCourse from './components/AddCourse';
import Login from './components/auth/Login';

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/" component={AddCourse} />
            <PrivateRoute path="/courses" component={CourseList} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
