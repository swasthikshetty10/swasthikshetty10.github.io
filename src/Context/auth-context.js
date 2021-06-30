import React from 'react';
export const user = {
    isLoggedIn: false
};

export const authContext = React.createContext(
    user
);
export default function AuthContext({ children }) {
    const value = {
        isLoggedIn: localStorage.getItem("access_token") ? true : false
    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>


}