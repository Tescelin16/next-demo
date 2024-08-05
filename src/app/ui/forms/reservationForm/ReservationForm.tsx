import { getInitialValues, getValidation } from "@/app/lib/reservationForm/initialize";
import { useFormik } from "formik";


const ReservationForm = () =>{
    const formik = useFormik({
        initialValues: getInitialValues(),
        validationSchema: getValidation(),
        onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {}

    })
    return <></>
}

export default ReservationForm;