import { JSX } from "@emotion/react/jsx-runtime";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HomeIcon from '@mui/icons-material/Home';
import { createBrowserRouter, Navigate } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import Guard from "./components/Guard";
import PdfTemplate from "./components/PdfTemplate";
import GeradorConvites from "./pages/gerador-convite/GeradorConvite";
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
            // to={{ pathname: '/home' }}
            to={{ pathname: '/gerarconvites' }}
          />,
      },

      { path: 'home', element: <h1>Home</h1> },
      { path: 'gerarconvites', element: <GeradorConvites /> },
      { path: 'cadastrarpessoas', element: <CadastrarPessoas /> },
      { path: 'cadastrarpontos', element: <CadastrarPontos /> },
    ]
  },
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

export const routesData: Record<string, { label: string, icon: JSX.Element, visible: boolean; }> = {
  'home': {
    label: 'Home',
    icon: <HomeIcon />,
    visible: false,
  },
  'gerarconvites': {
    label: 'Gerar convites',
    icon: <AutoFixHighIcon />,
    visible: true,
  },
  'cadastrarpessoas': {
    label: 'Cadastrar pessoas',
    icon: <GroupAddIcon />,
    visible: true,
  },
  'cadastrarpontos': {
    label: 'Cadastrar pontos',
    icon: <AddLocationAltIcon />,
    visible: true,
  },
};
