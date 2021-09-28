import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import UserContext from './context/user'
import useAuthListener from './hooks/use-auth-listener'

import ProtectedRoute from './helpers/protected-route'
import IsUserLoggedIn from './helpers/is-user-logged-in'
import Loading from './components/LoadingPage/Loading'

const Landing = lazy(() => import ('./pages/landing'))
const Signup = lazy(() => import ('./pages/signup'))
const Login = lazy(() => import ('./pages/login'))
const Dashboard = lazy(() => import ('./pages/index'))
const Profile = lazy(() => import ('./pages/profile'))
const Challenges = lazy(() => import ('./pages/challenges'))
const NotFound = lazy(() => import ('./pages/not-found'))
const PrivacyPolicy = lazy(() => import ('./pages/privacy-policy'))
const TermsOfUse = lazy(() => import ('./pages/terms-of-use'))

function App() {
  const { user } = useAuthListener()

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={
          <Loading />
        }>
          <Switch>
            <Route path={ ROUTES.LANDING } component={ Landing } exact />
            <Route path={ ROUTES.TOS } component={ TermsOfUse } exact />
            <Route path={ ROUTES.PRIVACY_POLICY } component={ PrivacyPolicy } exact />
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
            <ProtectedRoute user={user} path={ ROUTES.CHALLENGES } exact>
              <Challenges />
            </ProtectedRoute>
            <Route component={ NotFound } />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  )
}

export default App
