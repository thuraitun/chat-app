import { Navigate, createBrowserRouter } from "react-router-dom";
import App from '../App';
import { Chat, Login, Register } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Chat /> 
            },
            {
                path: "/register",
                element: <Register /> 
            },
            {
                path: "/login",
                element: <Login /> 
            },
            {
                path: "*",
                element: <Navigate to="/" />
            }
        ]
    },
]);

export default router;

