import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import UserContext from './context/user'
import useAuthListener from './hooks/use-auth-listener'

import ProtectedRoute from './helpers/protected-route'
import IsUserLoggedIn from './helpers/is-user-logged-in'

const Home = lazy(() => import ('./pages/index'))
const Signup = lazy(() => import ('./pages/signup'))
const Login = lazy(() => import ('./pages/login'))
const Dashboard = lazy(() => import ('./pages/dashboard'))
const Profile = lazy(() => import ('./pages/profile'))
const NotFound = lazy(() => import ('./pages/not-found'))

function App() {
  const { user } = useAuthListener()

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={ <p className='loadingPageText'>Loading...</p> }>
          <Switch>
            <Route path={ ROUTES.HOME } component={ Home } exact />
            <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.LOGIN}>
              <Login />
            </IsUserLoggedIn>
            <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGN_UP}>
              <Signup />
            </IsUserLoggedIn>
            <Route path={ROUTES.PROFILE} component={Profile} />
            <ProtectedRoute user={user} path={ ROUTES.DASHBOARD } exact>
              <Dashboard />
            </ProtectedRoute>
            <Route component={ NotFound } />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  )
}

export default App
