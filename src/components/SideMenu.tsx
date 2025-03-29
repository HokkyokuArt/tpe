import { JSX } from "@emotion/react/jsx-runtime";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { CSSObject, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Theme } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { topbarHeigh } from './Topbar';

type Props = {
    openMenu: boolean,
};

export const drawerWidth = '240px';
export const drawerWidthClosed = '65px';

const routesData: { label: string; icon: JSX.Element; path: string; }[] = [
    {
        path: 'gerarconvites',
        label: 'Gerar convites',
        icon: <AutoFixHighIcon />,
    },
    {
        path: 'cadastrarpessoas',
        label: 'Cadastrar pessoas',
        icon: <GroupAddIcon />,
    },
    {
        path: 'cadastrarpontos',
        label: 'Cadastrar pontos',
        icon: <AddLocationAltIcon />,
    },
    {
        path: 'instrucoes',
        label: 'Instruções',
        icon: <ExploreIcon />,
    },
];

const SideMenu = ({ openMenu }: Props) => {

    const navigate = useNavigate();

    return (
        <CustomDrawer
            variant="permanent" open={openMenu}>
            <List sx={{ marginTop: topbarHeigh }}>
                {routesData.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => navigate(item.path)}
                            sx={[
                                {
                                    minHeight: 48,
                                    px: 2.5,
                                },
                                openMenu
                                    ? {
                                        justifyContent: 'initial',
                                    }
                                    : {
                                        justifyContent: 'center',
                                    },
                            ]}
                        >
                            <ListItemIcon
                                sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                    },
                                    openMenu
                                        ? {
                                            mr: 3,
                                        }
                                        : {
                                            mr: 'auto',
                                        },
                                ]}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                sx={[
                                    openMenu
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </CustomDrawer>
    );
};

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${drawerWidthClosed} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${drawerWidthClosed} + 1px)`,
    },
});

const CustomDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

export default SideMenu;
