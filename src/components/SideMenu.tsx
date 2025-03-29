import { CSSObject, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Theme } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { router, routesData } from '../routes';
import { topbarHeigh } from './Topbar';

type Props = {
    openMenu: boolean,
};

export const drawerWidth = '240px';
export const drawerWidthClosed = '65px';

const SideMenu = ({ openMenu }: Props) => {

    const itens = router.routes[0]
        .children?.map(s => ({ path: s.path!, ...routesData[s.path!] }))
        .filter(s => s.visible) ?? [];

    const navigate = useNavigate();

    return (
        <CustomDrawer
            variant="permanent" open={openMenu}>
            <List sx={{ marginTop: topbarHeigh }}>
                {itens.map((item) => (
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
