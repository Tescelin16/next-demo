import { TypographyProps } from "@mui/material";
import { FormikProps } from 'formik';

export interface CustomFormLabelProps extends TypographyProps {
    htmlFor: string;
}

export interface PropertyTextField {
    id: string;
    label: string;
    xs: number;
    field: string;
    md?: number;
    lg?: number;
    hideLabel?: boolean;
    required?: boolean;
    type?: string;
    disabled?: boolean;
    showLabel?: boolean;
    multiline?: number;
    multiple?: boolean;
    array?: string;
    key?: number;
    placeholder?: string;
    icon?: JSX.Element
}

export interface GetTextFieldProps {
    property: PropertyTextField,
    formik: FormikProps<any>
}