import React from 'react';
import withRoot from '../modules/withRoot';
import ProductCategories from '../modules/views/ProductCategories';
import ProductHero from '../modules/views/ProductHero';
import ProductValues from '../modules/views/ProductValues';
import ProductCTA from '../modules/views/ProductCTA';
import ProductHowItWorks from '../modules/views/ProductHowItWorks';

function Home(){
    return(
        <React.Fragment>
          <ProductHero />
          <ProductValues />
          <ProductCategories />
          <ProductHowItWorks />
          <ProductCTA />
        </React.Fragment>
    );
}
export default withRoot(Home);