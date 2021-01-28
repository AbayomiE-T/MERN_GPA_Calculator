import Navbar from './components/Navbar'
import Register from './components/auth/Register'
import CourseList from './components/CourseList'
import { useEffect } from 'react';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './store';
import { loadUser } from './actions/authActions'
import AddCourse from './components/AddCourse';

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
            <Route to exact path="/" component={AddCourse} />
            <Route to="/Courses" component={CourseList} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
