import { createBrowserRouter, Navigate } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import Guard from "./components/Guard";
import PdfTemplate from "./components/PdfTemplate";
import GeradorConvites from "./pages/gerador-convite/GeradorConvite";
import Instrucoes from "./pages/instrucoes/Instrucoes";
import NotFound from "./pages/not-found/NotFound";
import CadastrarPessoas from "./pages/pessoas/CadastrarPessoas";
import CadastrarPontos from "./pages/pontos/CadastrarPontos";

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
            to={{ pathname: '/gerarconvites' }}
          />,
      },

      { path: 'gerarconvites', element: <GeradorConvites /> },
      { path: 'cadastrarpessoas', element: <CadastrarPessoas /> },
      { path: 'cadastrarpontos', element: <CadastrarPontos /> },
    ]
  },
  { path: '/instrucoes', element: <Instrucoes /> },
  { path: '/impressao', element: <PdfTemplate />, },
  { path: '/notfound', element: <NotFound /> },
  {
    path: '*',
    element: <Navigate
      replace={true}
      to={{ pathname: '/notfound' }}
    />,
  },
]);
