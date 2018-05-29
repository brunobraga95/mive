import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Magnify from 'mdi-material-ui/Magnify';
import { IconContainer } from './styles';

export default function RenderInput(inputProps) {
  const { classes, ref, onChange, ...other } = inputProps;
  return (
    <TextField
      onChange={onChange}
      fullWidth
      InputProps={{
        disableUnderline: true,
        inputRef: ref,
        startAdornment: (
          <InputAdornment position="start">
            <IconContainer>
              <Magnify />
            </IconContainer>
          </InputAdornment>
        ),
        ...other,
      }}
    />
  );
}
