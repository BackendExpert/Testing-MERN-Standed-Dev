import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true); // Add loading state
    const [user, setUser] = useState(null); // State to store user information

    // Check for token on initial load
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // You could also verify the token here and get user info if needed
            setIsAuthenticated(true);
            // Optionally set user info from the token or an API
            // setUser(decodeToken(token)); // Example function to decode token
        }
        setLoading(false);
    }, []);

    const login = (token, userInfo) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        setUser(userInfo); // Store user information
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null); // Clear user information
    };

    const value = { isAuthenticated, loading, user, login, logout };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children} {/* Only render children when not loading */}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
