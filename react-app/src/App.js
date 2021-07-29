import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/index.js';
import NotFoundPage from './components/NotFoundPage';
import InvoiceDashboard from './components/InvoiceDashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './components/User';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true}>
            <h1> My Home Page</h1>
        </Route>
        <Route path='/features' exact={true}>
            <h1> My Features Page</h1>
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/invoices' exact={true} >
          <InvoiceDashboard/>
        </ProtectedRoute>
        <ProtectedRoute path='/invoices/:id' exact={true} >
          <h1>Individual Invoice Page to download the invoice and edit the invoice</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/invoices/:id/payments' exact={true} >
          <h1>Add a payment to invoice</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/new-invoice' exact={true} >
          <h1>My create an invoice page</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/clients' exact={true} >
          <h1>My ALL clients list page</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/clients/:id' exact={true} >
          <h1>My individual client editing page</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/upgrade' exact={true} >
          <h1>My Link to other projects and Portfolio</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route component={NotFoundPage}/>
          
      </Switch>
    </BrowserRouter>
  );
}

export default App;
