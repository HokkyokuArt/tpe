import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Dispatch, SetStateAction } from 'react';


type Props = {
    setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export const topbarHeigh = '65px';

export default function Topbar({ setOpenMenu }: Props) {

    const handleToggleDrawer = () => {
        setOpenMenu(prev => !prev);
    };

    return (
        <CustomAppBar position="fixed" sx={{ height: topbarHeigh, display: 'flex', justifyContent: 'center' }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    onClick={handleToggleDrawer}
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5" fontWeight={900} noWrap component="div">
                    TPE
                </Typography>
            </Toolbar>
        </CustomAppBar>
    );
}

const CustomAppBar = styled(AppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
}));
