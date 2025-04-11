import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('adminToken'); // Check if token exists

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to="/adminLogin"
      replace
    />
  );
};

export default ProtectedRoute;
