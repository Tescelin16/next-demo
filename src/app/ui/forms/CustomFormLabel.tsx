import { styled} from "@mui/material/styles";
import { Typography} from "@mui/material";
import { CustomFormLabelProps } from "./lib/types";
import {lusitana} from '@/styles/fonts'


const CustomFormLabel = styled((props: CustomFormLabelProps)=>{
    return <Typography style={{fontFamily:'lusitana', fontSize:'16px'}}  component="label" {...props} htmlFor={props.htmlFor} />
})((props) => ({
    marginBottom: '5px',
    marginTop: '5px',  
    display: 'block',
  }));

  export default CustomFormLabel;