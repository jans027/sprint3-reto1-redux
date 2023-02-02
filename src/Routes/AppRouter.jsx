import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import { getAuth, onAuthStateChanged } from "firebase/auth";

// import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import Login from "../components/LoginForm";




const AppRouter = () => {
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged( auth, (user) => {
            if (user?.uid) {
                console.log(user);
                // Posibilidad de recuperar la info luego de que se recargue la web
                setAuth(true)
            } else {
                setAuth(false)
            }
        } )
    }, [])


    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas publicas */}
                <Route path='/Login' element={<PublicRouter isAutentication={auth}> <Login/> </PublicRouter>} />
                
                {/* Rutas privadas */}
                <Route path='/Next' element={<PrivateRouter isAutentication={auth}> <Next /> </PrivateRouter>} />
                <Route path='/' element={<PrivateRouter isAutentication={auth}> <Home /> </PrivateRouter>} />

                {/* Redireccionamiento */}
                <Route path='*' element={<Navigate to='/Login' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter