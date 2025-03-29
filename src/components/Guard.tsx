import { JSX } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
    children?: JSX.Element;
    // allowedRoles?: Array<string>;
};

const Guard = ({ children }: Props) => {

    const isAuthenticated = true;

    if (!isAuthenticated) {
        return (
            <Navigate to={'/login'}></Navigate>
        );
    }

    return children ? <>{children}</> : <Outlet />;
};

export default Guard;
