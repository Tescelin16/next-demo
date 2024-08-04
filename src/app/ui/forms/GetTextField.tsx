import { Grid, Typography } from "@mui/material"
import CustomFormLabel from "./CustomFormLabel"
import CustomTextField from "./CustomTextField"
import { GetTextFieldProps } from "@/app/lib/forms/types";

export const GetTextField = ({property, formik}: GetTextFieldProps) =>{

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (property.id === 'direccion' && formik.values.direccionInfo) {
          formik.setFieldValue('direccionInfo', null);
        }
        const partes = property.id.split('.');
        if (partes[1] === 'peso') {
          if (/^0/.test(e.target.value)) return;
        }
        formik.setFieldValue(property.id, e.target.value);
    };

    const error: boolean = Boolean(formik.touched[property.id] && formik.errors[property.id])

    return (
        <Grid
          item
          key={property.id}
          xs={property.xs}
          md={property.md || property.xs}
          lg={property.lg || property.xs}
        >
          {!property.hideLabel && (
            <CustomFormLabel htmlFor={property.id}>
              {property.label} {property.required ? <strong>*</strong> : <></>}
            </CustomFormLabel>
          )}
          <CustomTextField
            id={property.id}
            name={property.id}
            type={property.type}
            onBlur={formik.handleBlur}
            onChange={handleOnChange}
            value={formik.values[property.id]}
            disabled={formik.isSubmitting}
            label={(property.showLabel && property.label) || ''}
            multiline={Boolean(property.multiline)}
            rows={property.multiline || 1}
            error={error}
            variant="outlined"
            fullWidth
            autoComplete="off"
            placeholder={property.placeholder && property.placeholder}
            
          />
          <Typography
            style={{
              color: '#C93831',
              fontSize: 12,
              paddingLeft: 14,
              paddingTop: 2,
            }}
          >
            {error && `${formik.errors[property.id]}`}
          </Typography>
        </Grid>
    )
}