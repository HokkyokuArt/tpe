import { JSX, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

interface Props {
    children?: JSX.Element;
    // allowedRoles?: Array<string>;
};

const Guard = ({ children }: Props) => {

    const isAuthenticated = true;
    if (!isAuthenticated) return <Navigate replace={true} to={'/login'} />;

    const { get, put } = useLocalStorage();
    const [redirect, setRedirect] = useState<string | null>(null);

    useEffect(() => {
        const firstTime = get('firstTime');
        if (firstTime === null) {
            put('firstTime', true);
            setRedirect('/instrucoes');
        }
    }, []);

    if (redirect) {
        return <Navigate replace={true} to={redirect} />;
    }

    return children ? <>{children}</> : <Outlet />;
};

export default Guard;
