import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = useSelector((state) => state?.auth?.auth?.data?.user); // Assuming user data comes from Redux

  if (!user) {
    return <Navigate to="/login" />; // Redirect if not authenticated
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/page-error-404" />; // Redirect if role is not authorized
  }

  return children;
};

export default ProtectedRoute;
