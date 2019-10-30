import React from 'react';
import './Footer.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../../Assets/images/logo.png'
 

function Footer() {
  return (
	<footer className='footer'>
		<Grid container style={{padding: '1em 4em'}}>
	        <Grid item xs={6} className='footer-image'>
	          	<img src={logo} />
	        </Grid>		
	        <Grid item xs={2} className='footer-item'>
	          	<i class="fas fa-map-marker-alt"></i> 
	          	Џон Кенеди 19а, Скопје 1000, Македонија
	        </Grid>
	        <Grid item xs={2} className='footer-item'>
	          	<i class="fas fa-envelope"></i>
	          	info@rentscoot.com
	        </Grid>
	        <Grid item xs={2} className='footer-item'>
	          	<i class="fas fa-phone"></i> 
	          	+389-075-500-000
	        </Grid>
	      </Grid>
	    <Grid container>
	    	<Grid item xs={12} className='footer-item-last'>
	          	<i class="fab fa-facebook-f"></i>
	          	<i class="fab fa-instagram"></i>
	          	<i class="fab fa-twitter-square"></i>
	          	<i class="fab fa-youtube"></i>
	          	<p>Сите права задржани RentScoot ©2019</p>
	        </Grid>
	    </Grid>
	</footer>
  );
}

export default Footer;
