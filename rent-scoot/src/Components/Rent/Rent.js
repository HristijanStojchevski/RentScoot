import React, { Fragment,useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Rent.css';
import BoxMap from './Mapbox';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
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
  phone: Yup.string()
    .required('Задолжително!')
});

function Rent() {
  const style = {
    Paper: { padding: 20, margintTop: 10, marginBottom: 10 }
  }
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString());
  
  const handleDateChange = date=> {
    setSelectedDate(date);
  };

  return (
    <Fragment>
      <Grid container direction="column" justify="space-around">
        <Grid item>
          <Grid container justify="space-around">
            <Grid item xs>
              <Paper style={style.Paper}>
                <p>
                Left pane <br />
                List all locations
                </p>
              </Paper>
            </Grid>
            <Grid item sm={6}>
              <Paper style={style.Paper}>
                
                <BoxMap />
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper style={style.Paper}>
                <p>Right pane <br />
                List all vehicles<br />
                Models <br />
                BatteryLife<br />
                KM Range</p>
          </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container className="forma">
            <Grid item sm={10}>
              <Paper>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider><Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateStart: '',
        dateEnd: ''
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
          <Field name="phone" placeholder="Телефон" className="nupEdit"/>
          {errors.phone && touched.phone ? (
            <div>{errors.phone}</div>
          ) : null}
          <Field name="dateStart" placeholder="Изнајми од"/>
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="dateEnd" placeholder="Изнајми до"/>
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
              </Paper>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Rent;
