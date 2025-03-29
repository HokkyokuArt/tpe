import CheckIcon from '@mui/icons-material/Check';
import { Textarea } from "@mui/joy";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import useLocalStorage, { LocalStorageKeys } from "../../hooks/useLocalStorage";


export type State = {
    planilha: null | string,
};

const initialState: State = {
    planilha: null,
};

const CadastrarPontos = () => {
    const [localState, setLocalState] = useState(initialState);
    const { put } = useLocalStorage();

    const handleSave = () => {
        put(LocalStorageKeys.PONTOS, localState.planilha);
        setLocalState(initialState);
    };


    return (
        <>
            <Typography fontSize={50} sx={{ color: '#fefefe' }}>Pontos</Typography>

            <Textarea
                color="primary"
                value={localState.planilha ?? ''}
                onChange={(e) => setLocalState(prev => ({ ...prev, planilha: e.target.value }))}
                disabled={false}
                minRows={2}
                size="lg"
                variant="outlined"
                placeholder="Insira os dados da planilha aqui..."
            />


            <Button
                sx={{
                    borderRadius: '30px 0 0 30px',
                    position: 'fixed',
                    bottom: 20,
                    right: 0,
                }}
                variant="contained"
                disabled={!localState.planilha}
                color='success'
                onClick={handleSave}
            >
                <CheckIcon sx={{ color: '#fff', fontSize: 45 }} />
            </Button>

        </>
    );
};

export default CadastrarPontos;
