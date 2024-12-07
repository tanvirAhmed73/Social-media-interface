"use client";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
