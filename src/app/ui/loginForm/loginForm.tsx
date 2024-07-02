
import {
    AtSymbolIcon,
    KeyIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';
import { FormikProvider, useFormik } from 'formik';
import { formItems, getInitialValues, getValidation } from './lib/initialize';
import { Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import { GetTextField } from '../forms/GetTextField';
import {lusitana} from '@/styles/fonts'
    
export default function LoginForm() {
 
    const router = useRouter();

    const formik= useFormik({
        initialValues: getInitialValues(),
        validationSchema: getValidation(),
        onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
            setSubmitting(true)
            try {
                const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: values.username, password: values.password }),
                });
        
                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem('token', data.token);
                    router.push('/backoffice');
                } else {
                    alert('Usuario o contraseña incorrecta');
                }
            } catch (error) {
                
            } finally {
                router.push('/backoffice')
            }
          },
    })

    return (
        <Card >
            <CardHeader
            title="Please log in to continue."
            titleTypographyProps={{variant:'h2' ,className: ` ${lusitana.className}`}} />
            <CardContent>
                <FormikProvider value = {formik}>
                <form onSubmit={formik.handleSubmit} className="space-y-3">
                        
                            {formItems.map((property, index)=>{
                                return (
                                    <Grid item key={`login-${index.toString()}`}>
                                        <GetTextField property={property} formik={formik}/>
                                </Grid>)
                                })}
                        <Button 
                            type="submit"     
                            variant="contained"
                            fullWidth
                            disabled={formik.isSubmitting}>
                            Log in 
                        </Button>
                    
                            
                    </form>
                </FormikProvider>
            </CardContent>
        </Card>
    );
}
