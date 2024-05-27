import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const permission = false;

const handleRedirect = () => {
  return permission ? (
    <h3>Panel Admina - dzień dobry</h3>
  ) : (
    <Navigate to="/login" replace />
  );
};

const AdminPage = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={handleRedirect()}></Route>
      </Routes>
    </div>
  );
};

export default AdminPage;
