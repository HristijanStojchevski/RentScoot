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


  state = {
    email: '',
  }
  handleSubmit(e) {
      e.preventDefault()
      const { email } = this.state
      let templateParams = {
        email: email,
       }
       emailjs.send(
        'gmail',
        'template_ii0Roqxo',
         templateParams,
        'user_MOSCUCzUTNRwgqfcKKeJb'
       )
       this.resetForm()
   }

  resetForm() {
      this.setState({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }

  handleChange = (param, e) => {
      this.setState({ [param]: e.target.value })
    }

  render(){
    return (
      <Container component="section">
        <Grid container m={2}>
          <Grid item xs={6} md={6} className="left-grid">
            <div>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <Typography variant="h4" component="h4" gutterBottom>
                  Најавете се за промоции
                </Typography>
                <input type="email" onChange={this.handleChange.bind(this, 'email')} value={this.state.email} required placeholder="вашиот мејл" className="mail-class"/>
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
                <input type="email" required placeholder="вашиот мејл" value={this.email} className="mail-class"/>
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

