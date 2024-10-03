import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Adjust the path accordingly

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
