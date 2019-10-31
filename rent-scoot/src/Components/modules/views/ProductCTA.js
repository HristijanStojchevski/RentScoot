import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Button from '../components/Button';
import image from '../../../Assets/images/image6.jpg'
import './css/ProductCTA.css'
import emailjs from 'emailjs-com'

export default class ProductCTA extends React.Component {
  //state.email
  saveEmail(event){
    event.preventDefault();
    alert('Успешна најава за промоции.');
    const templateId = 'digit2019';
        emailjs.init("user_MOSCUCzUTNRwgqfcKKeJb");
        emailjs.send(
          'gmail', templateId,
          this.state //vo ovoj state treba da imas objekt so email 
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
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

