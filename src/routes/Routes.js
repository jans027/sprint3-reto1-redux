import { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Login from "../pages/Login.jsx";



export const Routes1 = () => {
    // const [checking, setChecking] = useState(true);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

    })

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<Navigate to="/"/>}/> 
            </Routes>
        </Router>

    )
}












