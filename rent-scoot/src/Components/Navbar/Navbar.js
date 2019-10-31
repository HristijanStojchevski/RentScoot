import React from 'react';
import {Paper,Tabs} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';  
import Link from 'react-router-dom/Link';

//import './Navbar.css';
function Navbar ({navValue}) {
    
    const [value, setValue] = React.useState(0);
const changeTabs= (event, newValue) => {
    setValue(newValue);
};
function setUpdate() {
  setValue(navValue);
}
React.useEffect(() => { setUpdate(); },navValue);
  
    return (
    <Paper>
    <Tabs 
    value={value}
    onChange = { changeTabs }
    indicatorColor="primary"
    textColor="primary" 
    centered
    >
    
    <Tab label="Почетна" component={Link} to="/"/>
    <Tab label="Изнајми" component={Link} to="/Rent"/>
    <Tab label="За нас" component={Link} to="/About"/>
    </Tabs>
    </Paper>
  );
}

export default Navbar;