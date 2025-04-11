import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FrontPage from './pages/FrontPage';
import AboutUs from './pages/AboutUs';
import ProtectedRoute from './components/ProtectedRoute';
import UserRegister from './pages/user/UserRegister';
import AdminRegister from './pages/admin/AdminRegister';
import TermsAndConditions from './pages/TermsAndConditions';
import AdminHome from './pages/admin/AdminHome';
import Contact from './pages/Contact';
import PatientDetails from './pages/PatientDetails';
import AdminLogin from './pages/admin/AdminLogin';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<FrontPage />}
        />
        <Route
          path="/userRegister"
          element={<UserRegister />}
        />
        <Route
          path="/adminRegister"
          element={<AdminRegister />}
        />
        <Route
          path="/terms"
          element={<TermsAndConditions />}
        />
        <Route
          path="/about"
          element={<AboutUs />}
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/adminHome"
            element={<AdminHome />}
          />
        </Route>
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/patientDetails/:id"
          element={<PatientDetails />}
        />
        <Route
          path="/adminLogin"
          element={<AdminLogin />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
