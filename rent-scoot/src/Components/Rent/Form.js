import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Form.css'


const RentSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(50, 'Премногу долго!')
    .required('Задолжително!'),
  lastName: Yup.string()
    .min(2, 'Премногу кратко!')
    .max(50, 'Премногу долго!')
    .required('Задолжително!'),
  email: Yup.string()
    .email('Невалиден формат!')
    .required('Задолжително!'),
  phone: Yup.number()
    .min(70000000,"Невалиден формат!")
    .max(78999999,"Невалиден формат!")
    .required('Задолжително!')
});
export default function FormFields(props){
    const dateStart = props.dateStart;
    const dateEnd = props.dateEnd
    return (
        <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateStart: dateStart,
        dateEnd: dateEnd
      }}
      validationSchema={RentSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className='reservation-form'>
          <Field className='form-field' name="firstName" placeholder="Име" />
          {errors.firstName && touched.firstName ? (
            <span className='validator'>{errors.firstName}</span>
          ) : null}
          <Field className='form-field' name="lastName" placeholder="Презиме"/>
          {errors.lastName && touched.lastName ? (
            <span className='validator'>{errors.lastName}</span>
          ) : null}
          <Field className='form-field' name="email" type="email" placeholder="Електронска пошта"/>
          {errors.email && touched.email ? <span className='validator'>{errors.email}</span> : null}
          <Field className='form-field' name="phone" type="number" placeholder="Телефон"/>
          {errors.phone && touched.phone ? (
            <span className='validator'>{errors.phone}</span>
          ) : null}
          <button type="submit" className='submit-button'>Поднеси</button>
        </Form>
      )}
    </Formik>
    );
}