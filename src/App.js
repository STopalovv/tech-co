import './App.css';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Header from './Header';
import HeaderSecond from './HeaderSecond';
import Home from './Home';
import Footer from './Footer';
import Login from './Login';
import Checkout from './Checkout';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment';
import BasketFooter from './BasketFooter';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51IT0dNAMwIWofkvZcgOKWXXnJg5cxNO9Ty1izxZ3Vj1e5jBi5QqEMny4CypCOrdBS7zVnjooxqGWO2Mh8Cfbx9ql00mlHQ3L5K');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <HeaderSecond />
            <Checkout />
          </Route>
          <Route path="/payments">
            <Header />
            <HeaderSecond />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <BasketFooter />
          </Route>
          <Route path="/">
            <Header />
            <HeaderSecond />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
