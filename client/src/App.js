import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Users/Login";
import Register from "./pages/Users/Register";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Users/Home";
import Admin from "./pages/Admin/adminDashboard";
import ApplicationList from "./pages/Admin/applicationList";
import UsersList from "./pages/Admin/usersList";
// import Slots from './pages/Admin/slots'
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/protectedRoute";
import PublicRoute from "./components/publicRoute";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <BrowserRouter>
      {loading && (
        <div className="spinner-parent">
          <div class="spinner-border" role="status"></div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/applications" element={<ApplicationList />} />
        <Route path="/admin/users" element={<UsersList />} />
        {/* <Route path="/admin/slots" element={<Slots />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
