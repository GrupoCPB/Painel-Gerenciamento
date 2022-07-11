import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

interface Column {
    id: 'hash' | 'data' | 'name' | 'tipo' | 'quantidade' | 'valor';
    label: string;
    minWidth?: number;
    align?: 'center';
}

const columns: readonly Column[] = [
    { id: 'hash', label: '#', align: 'center' },
    { id: 'data', label: 'Data', align: 'center' },
    { id: 'name', label: 'Nome', align: 'center' },
    { id: 'tipo', label: 'Tipo', align: 'center' },
    { id: 'quantidade', label: 'Quantidade', align: 'center' },
    { id: 'valor', label: 'Valor', align: 'center' }
];

interface Data {
    hash: number;
    data: string;
    name: string;
    tipo: string;
    quantidade: number;
    valor: string
}

function createData(
    hash: number,
    data: string,
    name: string,
    tipo: string,
    quantidade: number,
    valor: string
): Data {
    return { hash, data, name, tipo, quantidade, valor };
}

const rows = [
    createData(5, '04/04/22', 'Ana Carla Silva Souza', 'Alimentos', 20, 'R$ 13.505,00'),
    createData(5, '04/04/22', 'Ana Carla Silva Souza', 'Alimentos', 20, 'R$ 13.505,00'),
    createData(5, '04/04/22', 'Ana Carla Silva Souza', 'Alimentos', 20, 'R$ 13.505,00'),
    createData(5, '04/04/22', 'Ana Carla Silva Souza', 'Alimentos', 20, 'R$ 13.505,00'),
    createData(5, '04/04/22', 'Ana Carla Silva Souza', 'Alimentos', 20, 'Não se aplica'),
];

const PaperStyles = {
    width: '100%', 
    overflow: 'hidden', 
    padding: '40px 20px', 
    background: '#D7DEE9'
}

export default function RelatorioTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={PaperStyles} elevation={0}>
            <Typography component='h3' mb={3} fontWeight={600} color='#414141'>
                Exibindo todas as transações
            </Typography>

            <TableContainer sx={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                <Table stickyHeader >
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={Math.random() * 1000}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover key={Math.random() * 1000} sx={{ background: 'white' }}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={Math.random() * 1000} align={column.align}>
                                                    {
                                                        column.id === 'valor' ? 
                                                        <Typography component='p' color='#5D79DC' fontWeight='600'>
                                                            {value}
                                                        </Typography>
                                                        :
                                                        value
                                                    }
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage='Itens por página'
                labelDisplayedRows={({ from, to, count }) => { return `${from}–${to} de ${count !== -1 ? count : `more than ${to}`}`; }}
            />
        </Paper>
    );
}
