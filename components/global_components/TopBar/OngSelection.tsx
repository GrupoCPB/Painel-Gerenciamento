import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const FormStyles = {
    marginInline: '20px 5px',
    '& fieldset': {
        border: '0px',
    }
}

export default function OngSelection() {
    const [ong, setOng] = React.useState('ONG CPB');

    const handleChange = (event: SelectChangeEvent) => {
        setOng(event.target.value as string)
    };

    return (
        <>
            <FormControl fullWidth sx={FormStyles}>
                <Select
                    value={ong}
                    label="ONG"
                    onChange={handleChange}
                    defaultValue={ong}
                >
                    <MenuItem value={'ONG CPB'}>ONG CPB</MenuItem>
                    <MenuItem value={'ONG Global ORG'}>ONG Global ORG</MenuItem>
                    <MenuItem value={'ONG LGBT+ do Brasil'}>ONG LGBT+ do Brasil</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}
