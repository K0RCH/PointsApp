import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'

const Home = lazy(() => import ('./pages/index'))
const Signup = lazy(() => import ('./pages/signup'))
const Login = lazy(() => import ('./pages/login'))
const NotFound = lazy(() => import ('./pages/not-found'))
const Dashboard = lazy(() => import ('./pages/dashboard'))

function App() {
  return (
    <Router>
      <Suspense fallback={ <p className='loadingPageText'>Loading...</p> }>
        <Switch>
          <Route path={ ROUTES.HOME } component={ Home } exact />
          <Route path={ ROUTES.SIGN_UP } component={ Signup } exact />
          <Route path={ ROUTES.LOGIN } component={ Login } exact />
          <Route path={ ROUTES.DASHBOARD } component={ Dashboard } exact />
          <Route component={ NotFound } />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
