import { createBrowserRouter, Navigate } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import Guard from "./components/Guard";
import GeradorConvites from "./pages/gerador-convite/GeradorConvite";
import NotFound from "./pages/not-found/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Guard><BaseLayout /></Guard>,
    children: [
      {
        path: '',
        index: true,
        element:
          <Navigate
            replace={true}
            // to={{ pathname: '/home' }}
            to={{ pathname: '/gerarconvites' }}
          />,
      },

      { path: 'home', element: <h1>Home</h1> },
      { path: 'gerarconvites', element: <GeradorConvites /> },
    ]
  },

  {
    path: '*',
    element: <Navigate
      replace={true}
      to={{ pathname: '/notfound' }}
    />,
  },

  {
    path: '/notfound',
    element: <NotFound />

  },
]);
