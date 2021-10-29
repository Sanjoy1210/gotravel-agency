import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddPlans from './Pages/AddPlans/AddPlans';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageAllBookings from './Pages/ManageAllBookings/ManageAllBookings';
import MyBookings from './Pages/MyBookings/MyBookings';
import PlaceBooking from './Pages/PlaceBooking/PlaceBooking';
import Footer from './Pages/Shared/Footer/Footer';
import Headers from './Pages/Shared/Headers/Headers';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Headers />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/mybookings">
              <MyBookings />
            </PrivateRoute>
            <PrivateRoute path="/manageallbookings">
              <ManageAllBookings />
            </PrivateRoute>
            <PrivateRoute path="/addplans">
              <AddPlans />
            </PrivateRoute>
            <PrivateRoute path="/placebooking/:id">
              <PlaceBooking />
            </PrivateRoute>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
