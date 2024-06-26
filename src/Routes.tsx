import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import {LoginPage} from './pages/LoginPage';
import { RegistrationPage } from './pages/registrationPage';
import {DashboardPage} from './pages/dashboardPage';


function Routes() {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/registration" element={<RegistrationPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
      </ReactRoutes>
    </Router>
  );
}

export default Routes;
