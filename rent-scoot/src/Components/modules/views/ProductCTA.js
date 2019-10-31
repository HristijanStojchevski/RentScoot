import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';
import image from '../../../Assets/images/image6.jpg'
import './css/ProductCTA.css'


export default class ProductCTA extends React.Component {

  saveEmail(event){
    event.preventDefault();
    alert('Успешна најава за промоции.');
  };


  render(){
    return (
      <Container component="section">
        <Grid container m={2}>
          <Grid item xs={6} md={6} className="left-grid">
            <div>
              <form onSubmit={this.saveEmail}>
                <Typography variant="h4" component="h4" gutterBottom>
                  Најавете се за промоции
                </Typography>
                <input type="email" required placeholder="вашиот мејл" className="mail-class"/>
                <Button type="submit" color="primary" variant="contained">
                  Зачувај
                </Button>
              </form>
            </div>
          </Grid>
          <Grid item xs={6} md={6} className="right-grid">
            <Hidden smDown>
              <div />
              <img className="image-class"
                src={image}
                alt="call to action"
              />
            </Hidden>
          </Grid>
        </Grid>
        <Grid container m={2}>
          <Grid item xs={2} md={2} className="left-grid-full">
            <div>
              <form onSubmit={this.saveEmail}>
                <Typography variant="h4" component="h4" gutterBottom>
                  Најавете се за промоции
                </Typography>
                <input type="email" required placeholder="вашиот мејл" className="mail-class"/>
                <Button type="submit" color="primary" variant="contained">
                  Зачувај
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  };
};

