import { styled } from '@mui/system';
import {
  Button,
  TextField,
  Paper,
  Typography,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';

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
export const ViewButton = styled(Button, {
  name: 'ViewButton',
})({
  variant: 'contained',
  target: '_blank',
  width: 175,
  height: 50,
  backgroundColor: 'rgba(73, 97,175, 0.8)',
  color: 'white',
});
export const StyledPaper = styled(Paper, {
  name: 'StyledPaper',
})({
  padding: 105,
  height: 'auto',
  width: 500,
  margin: 'auto',
});
export const ViewSectionTypography = styled(Typography, {
  name: 'ViewSectionTypography',
})({
  paddingTop: 25,
  fontWeight: 'bold',
});
export const StyledCard = styled(Card, {
  name: 'StyledCard',
})({
  borderRadius: 7,
  marginTop: 3,
});

export const StyledCardContent = styled(CardContent, {
  name: 'StyledCardContent',
})({
  borderRadius: 7,
  marginTop: 3,
});

export const StyledAvatar = styled(Avatar, {
  name: 'StyledAvatar',
})({
  width: 300,
  height: 300,
});
