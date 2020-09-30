import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import logo from './Assets/tinder-logo.svgcl';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory  } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



//pass in backButton as prop, render if condition line 16 
function Header({backButton}){
  //useHistory Hook: gives session history
  const history = useHistory();
  return(
    <div className="header">
      {backButton ? (
        <IconButton onClick= {() => history.replace(backButton)}><ArrowBackIosIcon className="header__icon" fontSize="large"></ArrowBackIosIcon></IconButton>
      ): (
          <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
          </IconButton> 
      )}
      
      <Link to="/">  
        <img className="header__logo"
          src={logo} alt="tinder logo" />
      </Link>
      <Link to="/chat"> 
          <IconButton>
            <ForumIcon className="header__icon" fontSize="large" />
          </IconButton>
      </Link>
     
    </div>
  );
}
export default Header;