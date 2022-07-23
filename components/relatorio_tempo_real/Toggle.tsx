import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleButtonStyle = {
  textTransform: 'none',
  height: 'fit-content',
  padding: '1px 8px',
  fontSize: '12px',
  '&.MuiToggleButton-root': {
    marginLeft: '10px !important',
    borderRadius: '7px !important',
    border: 'solid 0px rgba(0, 0, 0, 0) !important',
    fontWeight: '600',
    color: '#5D79DC'
  },
  '&.Mui-selected': {
    backgroundColor: '#E9F1FE'
  }
}

export default function ToggleButtons() {
  const [dinheiro_ou_itens, setNewValue] = React.useState<string | null>('dinheiro');

  const handleNewValue = (
    event: React.MouseEvent<HTMLElement>,
    newValue: 'dinheiro' | 'itens',
  ) => {
    setNewValue(newValue);
  };

  return (
    <ToggleButtonGroup
      value={dinheiro_ou_itens}
      exclusive
      onChange={handleNewValue}
    >
      <ToggleButton sx={ToggleButtonStyle} value='dinheiro'>
        Em dinheiro
      </ToggleButton>
      <ToggleButton sx={ToggleButtonStyle} value='itens'>
        Em itens
      </ToggleButton>
    </ToggleButtonGroup>
  );
}