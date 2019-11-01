import React from 'react';
import {Paper,Tabs} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';  
import Link from 'react-router-dom/Link';
import Logo from '../../Assets/images/logo.png'
import './Navbar.css';
import Grid from '@material-ui/core/Grid';


//import './Navbar.css';
function Navbar ({navValue}) {
    
    const [value, setValue] = React.useState(0);
const changeTabs= (event, newValue) => {
    setValue(newValue);
    //navValue=0;
    //console.log(navValue);
};
function setUpdate() {
  setValue(1);
}
React.useEffect(() => { setUpdate(); },[navValue]);
  
    return (
    <Paper style={{backgroundColor: '#3a4aa3'}}>
    <Grid container>
        <Grid item sm={2}>
            <img className="nav-logo" src={Logo} alt=" "/>
        </Grid>
        <Grid item sm={8}>
            <Tabs 
                value={value}
                onChange = { changeTabs }
                indicatorColor="warning"
                textColor="primary" 
                centered
                >

            <Tab label="Почетна" component={Link} to="/"/>
            <Tab label="Изнајми" component={Link} to="/Rent"/>
            <Tab label="За нас" component={Link} to="/About"/>
            </Tabs>
        </Grid>
        <Grid item sm={2}>
        </Grid>
    </Grid>
    </Paper>
  );
}

export default Navbar;