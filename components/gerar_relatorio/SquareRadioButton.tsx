import { Box, Radio, FormControlLabel } from "@mui/material";
import { display } from "@mui/system";

type SquareRadioButton = {
    text: string,
}

const RadioButtonStyles = {
    border: 'solid 1px #D7DEE9',
    width: '20%',
    padding: '20px 0 20px 15px',
    marginRight: '15px',
    borderRadius: '6px'
}


export default function SquareRadioButton({ text }: SquareRadioButton) {
    return (
        <Box sx={RadioButtonStyles}>
            <FormControlLabel value={text} control={<Radio size="small" />} label={text} />
        </Box>
    )
}