import PrintIcon from '@mui/icons-material/Print';
import { Textarea, Typography } from "@mui/joy";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import useLocalStorage, { LocalStorageKeys } from '../../hooks/useLocalStorage';
import { pontosData } from '../pontos/pontos';

export type State = {
  planilha: null | string,
};

const initialState: State = {
  planilha: null,
};

function GeradorConvites() {

  const [localState, setLocalState] = useState(initialState);
  const { get, put } = useLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!get<string>(LocalStorageKeys.PONTOS)) {
      put(LocalStorageKeys.PONTOS, pontosData);
    }
  }, []);


  return (
    <>
      <Typography fontSize={50} sx={{ color: '#fefefe' }}>Gerador de convites TPE</Typography>

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
        color='primary'
        onClick={() => navigate('/impressao', {
          state: {
            planilha: localState.planilha
          }
        })}
      >
        <PrintIcon sx={{ color: '#fff', fontSize: 45 }} />
      </Button>
    </>
  );
}

export default GeradorConvites;
