import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Rent.css';
import Map from './GoogleMap';
import BoxMap from './Mapbox';

function Rent() {
  const style = {
    Paper: { padding: 20, margintTop: 10, marginBottom: 10 }
  }

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
                Forma
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Rent;
