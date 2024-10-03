import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./Dashboard/Dashboard";
import ProtectedRoute from "./Protected/ProtectedRoute";
import { AuthProvider } from "./Protected/AuthContext"; // Adjust the path accordingly

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
