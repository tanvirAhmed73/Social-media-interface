import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const authContext = useContext(AuthContext);

  if (!authContext)
    throw new Error("AuthContext must be used within AuthProvider");
  const { user, loading } = authContext;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signup" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
