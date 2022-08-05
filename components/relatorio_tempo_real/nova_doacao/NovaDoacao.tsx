import { styled, Container, Typography, TextField, Grid, Button } from "@mui/material";

const Form = styled('form')`
    & label {
        display: flex;
        flex-direction: column;
        font-weight: 700;
        font-size: 14px;
        
        & span {
            margin-bottom: 5px;
        }

        &:first-of-type {
            flex-grow: 1;
            margin-left: 0;
        }
        
        & .MuiOutlinedInput-input  {
            background: #F8F8F8;
            border-radius: 4px;
        }

        & .MuiOutlinedInput-notchedOutline {
            border: 0px;
        }
    }
`;

const ContainerStyles = {
    background: 'white',
    borderRadius: '4px',
    paddingTop: '30px',
    paddingBottom: '50px',

    '& .MuiOutlinedInput-root': {
        padding: '0'
    }
}

type NovaDoacao = {
    DoacaoOuDespesa?: 'doacao' | 'despesa'
}

export default function NovaDoacaoOuDespesa({DoacaoOuDespesa = 'doacao'}:NovaDoacao) {


    return (
        <Container sx={ContainerStyles}>
            <Typography variant='h5' fontWeight={600} mb={6} color='#5B5B5B'>Nova {`${DoacaoOuDespesa === 'doacao' ? 'doação' : 'despesa'}`}</Typography>
            <Form>
                <Grid container columns={20} rowGap={4}>
                    <Grid item container columns={10} xs={20} justifyContent='space-between'>
                        <Grid item xs={3}>
                            <label>
                                <span>Nome da empresa</span>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    placeholder="Digite o nome da pessoa física ou jurídica"
                                />
                            </label>
                        </Grid>

                        <Grid item xs={2}>
                            <label>
                                <span>Valor</span>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    placeholder="R$ 0,00"
                                />
                            </label>
                        </Grid>

                        <Grid item xs={2}>
                            <label>
                                <span>Data de inclusão</span>
                                <TextField
                                    type="date"
                                    variant="outlined"
                                    placeholder="MM/DD/AAAA"
                                />
                            </label>
                        </Grid>

                        <Grid item xs={2}>
                            <label>
                                <span>Telefone</span>
                                <TextField
                                    type="number"
                                    variant="outlined"
                                    placeholder="(11)9999-9999"
                                />
                            </label>
                        </Grid>
                    </Grid>

                    <Grid item container columns={12} xs={20} justifyContent='space-between'>
                        <Grid item xs={2}>
                            <label>
                                <span>Causa escolhida</span>
                                <TextField
                                    type="select"
                                    variant="outlined"
                                    placeholder="Animais"
                                />
                            </label>
                        </Grid>

                        <Grid item xs={2}>
                            <label>
                                <span>ONG selecionada</span>
                                <TextField
                                    type="number"
                                    variant="outlined"
                                    placeholder="CPB Argentina"
                                />
                            </label>
                        </Grid>

                        <Grid item xs={2}>
                            <label>
                                <span>Tipo de operação</span>
                                <TextField
                                    type="number"
                                    variant="outlined"
                                    placeholder="Doação"
                                />
                            </label>
                        </Grid>

                        <Grid item xs={1.5}>
                            <label>
                                <span>Tipo de doação</span>
                                <TextField
                                    type="number"
                                    variant="outlined"
                                    placeholder="Dinheiro"
                                />
                            </label>
                        </Grid>

                        <Grid item xs={1.3}>
                            <label>
                                <span>Qtde. de itens</span>
                                <TextField
                                    type="number"
                                    variant="outlined"
                                    placeholder="01"
                                />
                            </label>
                        </Grid>

                        <Grid item xs={2}>
                            <label>
                                <span>Natureza da doação</span>
                                <TextField
                                    type="number"
                                    variant="outlined"
                                    placeholder="Presencial"
                                />
                            </label>
                        </Grid>
                    </Grid>

                    <Grid item xs={20}>
                        <label>
                            <span>Observações</span>
                            <TextField
                                multiline
                                rows='5'
                                type="text"
                                variant="outlined"
                                placeholder="Digite observações (opcional)"
                                sx={{'& .MuiOutlinedInput-input': {padding: '10px'}}}
                            />
                        </label>
                    </Grid>

                    <Grid item xs={20} display='flex' justifyContent='center'>
                        <Button variant="contained" sx={{width:'40%', textTransform: 'none', background: '#6E84A5', paddingTop: '10px', paddingBottom: '10px'}}>
                            Salvar nova {`${DoacaoOuDespesa === 'doacao' ? 'doação' : 'despesa'}`}
                        </Button>
                    </Grid>
                </Grid>

            </Form>
        </Container>
    )
}