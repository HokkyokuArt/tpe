import PrintIcon from '@mui/icons-material/Print';
import { Box, Textarea, Typography } from "@mui/joy";
import { Button } from "@mui/material";
import { useState } from "react";
import PdfTemplate from "./PdfTemplate";

export type State = {
  planilha: null | string,
  openPdf: boolean,
  index: number,
};

const initialState: State = {
  planilha: null,
  openPdf: false,
  index: 0,
};

function App() {

  const [localState, setLocalState] = useState(initialState);

  return (
    <>
      {!localState.openPdf &&
        <Box sx={{
          padding: '50px 100px'
        }}>

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
            onClick={() => setLocalState(prev => ({ ...prev, openPdf: true }))}
          >
            <PrintIcon sx={{ color: '#fff', fontSize: 45 }} />
          </Button>
        </Box>
      }

      {localState.openPdf &&
        <PdfTemplate state={localState} setState={setLocalState} />
      }

    </>
  );
}

export default App;
