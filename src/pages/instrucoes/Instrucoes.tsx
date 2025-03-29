import { Box, Button, Container, List, ListItem, ListItemText, Typography } from '@mui/material';

import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CheckIcon from '@mui/icons-material/Check';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useNavigate } from 'react-router-dom';


const Instrucoes = () => {
    const navigate = useNavigate();

    const instrucoesPorTopicos = [
        {
            topico: 'Gerar convites',
            icon: <AutoFixHighIcon />,
            instrucoes: [
                `Vá em alguma das abas de 'Agendamentos'`,
                `Selecione as colunas 'NOME DO PUBLICADOR' até 'HORÁRIO'`,
                `Copie e cole no input do gerador de convite`,
                'Clique no botão imprimir',
                'Aguarde carregar o visualizador do PDF',
                'Clique no ícone de impressora',
                'Clique em salvar',
            ],
        },

        {
            topico: 'Pessoas',
            icon: <GroupAddIcon />,
            instrucoes: [
                `Vá na aba 'Cadastros'`,
                `Selecione as colunas 'NOME DO PUBLICADOR' até 'TELEFONE'`,
                `Copie e cole no input do cadastro de pessoas`,
                'Clique no botão salvar',
            ],
        },

        {
            topico: 'Pontos',
            icon: <AddLocationAltIcon />,
            instrucoes: [
                `Em construção...`,
            ],
        },
    ];

    return (
        <Container sx={{ marginY: '50px' }}>
            <Typography sx={{ color: '#079cff', marginBottom: '20px' }} variant='h2'>Instruções de uso:</Typography>
            <Typography sx={{ color: '#ddf', marginBottom: '20px' }}>
                Ao utilizar pela primeira vez, é nesserário cadastrar as pessoas antes de gerar os convites.
                Os pontos são cadastrados automáticamente.
                Tanto pessoas como pontos podem ser atualizados manualmente seguindo os respectivos passos de cadastro listados abaixo.
                Se ao tentar gerar o convite a tela ficar em branco, provavelmente é alguma pessoa que foi adicionada recentemente.
                Após cadastrar as pessoas uma vez, elas ficaram salvas localmente.
            </Typography>

            <Box sx={{ display: 'flex', gap: '30px' }}>
                {instrucoesPorTopicos.map((instrucao, indexA) =>
                    <Box key={indexA} sx={{ flex: 1, height: '100%', boxShadow: '3px 3px 20px rgba(0,0,0,0.1)', padding: '20px' }}>
                        <Typography sx={{ color: '#dff', display: 'flex', alignItems: 'center', gap: '10px' }} variant='h4'>{instrucao.icon} {instrucao.topico}:</Typography>
                        <List>
                            {instrucao.instrucoes.map((text, indexB) =>
                                <ListItem key={"" + indexA + indexB}>
                                    <ListItemText
                                        primary={text + ';'}
                                        sx={{ color: '#ddf' }}
                                    />
                                </ListItem>
                            )}
                        </List>
                    </Box>
                )}
            </Box>

            <Button
                sx={{
                    borderRadius: '30px 0 0 30px',
                    position: 'fixed',
                    bottom: 20,
                    right: 0,
                }}
                variant="contained"
                color='success'
                onClick={() => navigate('/')}
            >
                <CheckIcon sx={{ color: '#fff', fontSize: 45 }} />
            </Button>
        </Container>
    );
};

export default Instrucoes;
