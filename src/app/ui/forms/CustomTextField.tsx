import { styled } from '@mui/material/styles';
import { TextField, TextFieldProps } from '@mui/material';

const CustomTextField = styled((props: TextFieldProps) => <TextField {...props} />)(({ theme }) => ({
}));

export default CustomTextField;