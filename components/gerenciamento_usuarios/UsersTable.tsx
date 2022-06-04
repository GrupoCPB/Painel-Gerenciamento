import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
    id: 'hash' | 'avatar' | 'name' | 'email' | 'cpf' | 'status';
    label: string;
    minWidth?: number;
    align?: 'center';
}

const columns: readonly Column[] = [
    { id: 'hash', label: '#', align: 'center' },
    { id: 'avatar', label: 'Avatar', align: 'center' },
    { id: 'name', label: 'Nome', align: 'center' },
    { id: 'email', label: 'Email', align: 'center' },
    { id: 'cpf', label: 'CPF', align: 'center' },
    { id: 'status', label: 'Status', align: 'center' }
];

interface Data {
    hash: number;
    avatar: string;
    name: string;
    email: string;
    cpf: number;
    status: string
}

function createData(
    hash: number,
    avatar: string,
    name: string,
    email: string,
    cpf: number,
    status: string
): Data {
    return { hash, avatar, name, email, cpf, status };
}

const rows = [
    createData(1, 'a', 'a', 'a', 1, 'status'),
    createData(1, 'a', 'a', 'a', 1, 'status'),
    createData(1, 'a', 'a', 'a', 1, 'status'),
];

const PaperStyles = {
    width: '100%', 
    overflow: 'hidden', 
    padding: '40px 20px', 
    background: '#D7DEE9'
}

export default function UsersTable() {
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
        <Paper sx={PaperStyles}>
            <TableContainer sx={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                <Table stickyHeader >
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
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
                                    <TableRow hover key={row.hash} sx={{ background: 'white' }}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
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
