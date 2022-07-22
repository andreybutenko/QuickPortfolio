import { styled } from '@mui/system';
import { Button, TextField } from '@mui/material';

export const StyledTextField = styled(TextField, {
  name: 'StyledTextField',
})({
  width: 300,
  padding: 4,
});
export const StyledParagraphTextField = styled(TextField, {
  name: 'StyledParagraphTextField',
})({
  width: 300,
});
export const StyledButton = styled(Button, {
  name: 'StyledButton',
})({
  width: 300,
});
