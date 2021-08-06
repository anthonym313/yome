import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/index.js';
import NotFoundPage from './components/NotFoundPage';
import InvoiceDashboard from './components/InvoiceDashboard';
import InvoiceCreator from './components/InvoiceCreator';
import InvoiceInfoPage from './components/InvoiceInfoPage';
import ClientDashboard from './components/ClientDashboard';
import ClientCreator from './components/ClientCreator';
import ClientInfoPage from './components/ClientInfoPage';
import HomePage from './components/HomePage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Settings from './components/Settings';
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
            <HomePage/>
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
        <ProtectedRoute path='/invoices/:invoice_number' exact={true} >
          <InvoiceInfoPage/>
        </ProtectedRoute>
        <ProtectedRoute path='/invoices/:id/payments' exact={true} >
          <h1>Add a payment to invoice</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/new-invoice' exact={true} >
          <InvoiceCreator/>
        </ProtectedRoute>
        <ProtectedRoute path='/new-client' exact={true} >
          <ClientCreator/>
        </ProtectedRoute>
        <ProtectedRoute path='/clients' exact={true} >
          <ClientDashboard/>
        </ProtectedRoute>
        <ProtectedRoute path='/clients/:id' exact={true} >
          <ClientInfoPage/>
        </ProtectedRoute>
        <ProtectedRoute path='/upgrade' exact={true} >
          <h1>My Link to other projects and Portfolio</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/settings' exact={true} >
          <Settings/>
        </ProtectedRoute>
        <Route component={NotFoundPage}/>
          
      </Switch>
    </BrowserRouter>
  );
}

export default App;
