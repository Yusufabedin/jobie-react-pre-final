import React, { useState } from 'react'
/// React router dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/// Layout
import SideBar from './layouts/SideBar'
import NavHader from './layouts/NavHader'
import Header from './layouts/Header'
import ChatBox from './layouts/ChatBox'
/// Import Components
import Home from './components/Dashboard/Home/Home'
import SearchJobs from './components/Dashboard/SearchJobs/SearchJobs'
import Application from './components/Dashboard/Application/Application'
import Profile from './components/Dashboard/Profile/Profile'
import Companies from './components/Dashboard/Companies/Companies'
import Statistics from './components/Dashboard/Statistics/Statistics'
// Charts import

import SparklineChart from './components/charts/Sparkline'
import ChartJs from './components/charts/Chartjs'
import Chartist from './components/charts/Chartist'

/// Components
// import UiAccordion from "./components/bootstrap/Accordion";
import UiAlert from './components/bootstrap/Alert'

//** Import Components of Apps */
import AppProfile from './components/AppsMenu/AppProfile/AppProfile'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Error400 from './pages/Error400'
import Error403 from './pages/Error403'
import Error404 from './pages/Error404'
import ForgotPassword from './pages/ForgotPassword'
import Error500 from './pages/Error500'
import Error503 from './pages/Error503'
import LockScreen from './pages/LockScreen'
//** Import Components of Charts */
//** Import Components of Bootstrap */
//** Import Components of Plugins */
//** Import Components of Widget */
//** Import Components of Forms */
//** Import Components of Table */
//** Import Components of Pages */

const Markup = () => {
  const [toggleChatBox, setToggleChatBox] = useState(false)
  const [toggleNotification, setToggleNotification] = useState(false)
  const [profileToggle, setProfileToggle] = useState(false)
  const onClickChate = () => {
    setToggleChatBox(!toggleChatBox)
    setToggleNotification(toggleChatBox && false)
    setProfileToggle(toggleChatBox && false)
  }
  const onClickNotification = () => setToggleNotification(!toggleNotification)
  return (
    <Router>
      <div id='main-wrapper'>
        <NavHader />
        <SideBar />
        <Header
          onClick={() => onClickChate()}
          onClickNotification={() => onClickNotification()}
          notification={toggleNotification}
          onProfileToggle={() => setProfileToggle(!profileToggle)}
          profileToggle={profileToggle}
        />
        <ChatBox onClick={() => onClickChate()} toggleChatBox={toggleChatBox} />
        <div className='content-body'>
          <div className='container-fluid'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/application' exact component={Application} />
              <Route path='/profile' exact component={Profile} />
              <Route path='/companies' exact component={Companies} />
              <Route path='/statistics' exact component={Statistics} />
              {/* <Route
                        exact
                        path="/ui-accordion"
                        component={UiAccordion}
                     /> */}
              <Route exact path='/ui-alert' component={UiAlert} />
              <Route exact path='/search-job' component={SearchJobs} />

              {/* Apps */}
              <Route path='/app-profile' exact component={AppProfile} />

              {/* Charts */}
              {/* Bootstrap */}
              {/* Plugins */}
              {/* Widget */}
              {/* Forms */}
              {/* Table */}
              {/* Pages */}
              <Route path='/page-register' exact component={Registration} />
              <Route path='/page-login' exact component={Login} />
              <Route path='/page-error-400' exact component={Error400} />
              <Route path='/page-error-403' exact component={Error403} />
              <Route path='/page-error-404' exact component={Error404} />
              <Route
                path='/page-forgot-password'
                exact
                component={ForgotPassword}
              />
              <Route path='/page-error-500' exact component={Error500} />
              <Route path='/page-error-503' exact component={Error503} />
              <Route path='/page-lock-screen' exact component={LockScreen} />
              <Route path='/chart-sparkline' exact component={SparklineChart} />
              <Route path='/chart-chartjs' exact component={ChartJs} />
              <Route path='/chart-chartist' exact component={Chartist} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Markup
