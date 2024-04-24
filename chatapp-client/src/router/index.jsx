import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from '../App';
import { Chat, Login, Register } from "../pages";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Index = () => {

    const { user } = useContext(AuthContext)
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "",
                    element:  user ? <Chat /> : <Login/> 
                },
                {
                    path: "/register",
                    element: user ? <Chat /> : <Register /> 
                },
                {
                    path: "/login",
                    element: user ? <Chat /> : <Login /> 
                },
                {
                    path: "*",
                    element: <Navigate to="/" />
                }
            ]
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default Index;

