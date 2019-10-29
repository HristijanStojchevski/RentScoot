import React from 'react';
import './About.css';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image2 from '../../Assets/images/image5.jpg'; // with import

 

function About() {
  return (
	<div style={{margin: '2em'}}>
		<div className='header-background'>
			<h1>ЗА НАС!</h1>
		</div>
		<br/>
		<Box m={1} className='about-us-grid'>
			<Grid container direction="row" justify="center" alignItems="center">
		        <Grid item xs={6} className='description-grid'>
		          	<h3 className='description-heading'>Нашата визија!</h3>
					<p className='description-text'>
						Рамката на електричните тротинети е изработена од алуминум и поради тоа тие тежат само 12
					    килограми. Големината на гумата изнесува 21.2 центиметри, а големината на моторот е само 
					    16.7 центиметри. Максималната брзина која ја достигнува е приближно 25 км/ч, 
					    максимален вртежен момент 16 Nm. Со полн акумулатор, може да помине 30 километри, 
					    а времето потребно за да се наполни изнесува околу 5 часа. 
					    Ова значи дека има потрошувачка од 1.1 kWh на 100 километри. 
					    Благодарение на дисковите за кочење, на рамен асфалт, растојанието за кочење изнесува 4 метри. 
					    Снопот на предното светло изнесува 60 метри, а задните светла се опремени со LED. 
					    Има два режима на возење, нормален – бела светилка; штедлив – зелена светилка. 
					    Штедливиот режим дозволува максимална брзина од 18 км/ч и поблаго забрзување за почетници.
					</p>
					<div class="btn from-middle">Резервирај сега! &#x21fe;</div>
		        </Grid>
		        <Grid item xs={6}>
		        	<img src={image2} className='about-images' />
		        </Grid>
		    </Grid>
		</Box>
	</div>
  );
}

export default About;
