import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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
        <Form>
          <Field name="firstName" placeholder="Име" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" placeholder="Презиме"/>
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" placeholder="Електронска пошта"/>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field name="phone" type="number" placeholder="Телефон"/>
          {errors.phone && touched.phone ? (
            <div>{errors.phone}</div>
          ) : null}
          <Field name="dateStart" value={{dateStart}} placeholder="Изнајми од" disabled/>
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="dateEnd" value={{dateEnd}}placeholder="Изнајми до" disabled/>
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    );
}