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
import FormFields from './Form';

function Rent() {
  const style = {
    Paper: { padding: 20, margintTop: 10, marginBottom: 10 }
  }
  const [selectedStartDate, setSelectedStartDate] = useState(new Date().toISOString());
  
  const handleDateStartChange = date=> {
    setSelectedStartDate(date);
  };
  const [selectedEndDate, setSelectedEndDate] = useState(new Date().toISOString());
  
  const handleDateEndChange = date=> {
    setSelectedEndDate(date);
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
          value={selectedStartDate}
          onChange={handleDateStartChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedStartDate}
          onChange={handleDateStartChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedEndDate}
          onChange={handleDateEndChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedEndDate}
          onChange={handleDateEndChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
            <FormFields dateStart={selectedStartDate} dateEnd={selectedEndDate}/>
              </Paper>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Rent;
