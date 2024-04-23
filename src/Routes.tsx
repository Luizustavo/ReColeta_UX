import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import {LoginPage} from './pages/LoginPage';
import { RegistrationPage } from './pages/registrationPage';


function Routes() {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/registration" element={<RegistrationPage/>} />
      </ReactRoutes>
    </Router>
  );
}

export default Routes;
