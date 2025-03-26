import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../src/components/layout/Layout';
import { LoginPage } from '../src/pages/Login';
import { AdminDashboard } from '../src/pages/AdminDashboard';
import { OrganizationDashboard } from '../src/pages/OrganizationDashboard';
import { EnrollOrganizationPage } from '../src/pages/EnrollOrganization';
import { InviteUserPage } from '../src/pages/InviteUser';
import  ProtectedRoute  from '../src/components/common/ProtectedRoute';

export const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Default Route: Redirect to /login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/organization-dashboard" element={<OrganizationDashboard />} />
            <Route path="/enroll-organization" element={<EnrollOrganizationPage />} />
            <Route path="/invite-user" element={<InviteUserPage />} />
          </Route>

          {/* Fallback Route: Redirect to /login for unknown paths */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};