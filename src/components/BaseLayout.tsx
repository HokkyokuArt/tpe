import { Box, BoxProps, Container, styled } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu, { drawerWidth, drawerWidthClosed } from './SideMenu';
import Topbar, { topbarHeigh } from './Topbar';

const BaseLayout = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Topbar setOpenMenu={setOpen} />
            <SideMenu openMenu={open} />
            <WrapperMain open={open}>
                <Container>
                    <Outlet />
                </Container>
            </WrapperMain>
        </>
    );
};

export default BaseLayout;

interface WrapperMain extends BoxProps {
    open?: boolean;
}

const WrapperMain = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'open',
})<WrapperMain>(({ theme }) => ({
    paddingTop: topbarHeigh,
    transition: theme.transitions.create(['padding'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                paddingLeft: drawerWidth
            },
        },
        {
            props: ({ open }) => !open,
            style: {
                paddingLeft: drawerWidthClosed
            },
        },
    ],
}));
