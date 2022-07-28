/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import CustomMenuItem from './CustomMenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const FormStyles = {
    marginInline: '0px 5px',
    '& fieldset': {
        border: '0px',
    },
}

const MenuStyles = {
    '& .MuiList-root': {
        paddingTop: '0px',
        paddingBottom: '0px',

        '& li': {
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '0px',
            color: '#7A798B',
            fontWeight: '600',
            '& img': {
                alignSelf: 'center'
            }
        }
    }
}

export default function OngSelection() {
    const [ong, setOng] = React.useState('ONG CPB');

    const handleChange = (event: SelectChangeEvent) => {
        setOng(event.target.value as string)
    };

    return (
        <>
            <FormControl fullWidth sx={FormStyles} >
                <Select
                    value={ong}
                    label="ONG"
                    onChange={handleChange}
                    defaultValue={ong}
                    MenuProps={{ sx: MenuStyles }}
                >
                    <MenuItem value='ONG CPB'>
                        <CustomMenuItem value='ONG CPB' source='/logo_cpb.png' />
                    </MenuItem>

                    <MenuItem value='ONG Global ORG'>
                        <CustomMenuItem value='ONG Global ORG' source='/logo_global.png' />
                    </MenuItem>
                    <MenuItem value='ONG LGBT+ do Brasil'>
                        <CustomMenuItem value='ONG LGBT+ do Brasil' source='/logo_lgbt.png' />
                    </MenuItem>
                </Select>
            </FormControl>
        </>
    );
}
