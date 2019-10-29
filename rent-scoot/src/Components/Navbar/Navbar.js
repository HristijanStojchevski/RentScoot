import React from 'react';
import {Paper,Tabs} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';  
import Link from 'react-router-dom/Link';
function Navbar () {

    const [value, setValue] = React.useState(0);

const changeTabs= (event, newValue) => {
    setValue(newValue);
};

    return (
    <Paper>
    <Tabs
    value={value}
    onChange = { changeTabs }
    indicatorColor="primary"
    textColor="primary" 
    centered
    >
    
    <Tab label="Home" component={Link} to="/"/>
    <Tab label="Rent" component={Link} to="/Rent"/>
    <Tab label="About" component={Link} to="/About"/>
    </Tabs>
    </Paper>
  );
}

export default Navbar;