import { Box, Typography } from '@mui/material';

const NotFound = () => {
    return (
        <Box sx={{ width: '100%', height: '100vh', display: 'grid', placeItems: 'center', userSelect: 'none' }}>
            <Box sx={{ width: 'min-content', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                <Typography sx={{ color: '#079cff', WebkitTextStroke: '1px white', fontSize: 200, fontWeight: 900, fontFamily: '"Fontdiner Swanky", sans-serif;', textAlign: 'center' }}>404</Typography>
                <Typography sx={{ color: '#ffeded', fontSize: 30, fontFamily: '"Red Hat Display", sans-serif;', textAlign: 'center' }}>Página não encontrada!</Typography>
            </Box>
        </Box>
    );
};

export default NotFound;
