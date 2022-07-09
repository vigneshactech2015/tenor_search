import React from 'react'
import classes from './Header.module.css';
import { MdFileUpload } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
function Header() {
  return (
    <div className={classes.header_container}>
    <h1 className={classes.appname}>tenor</h1>
    <div className={classes.header_right}>
  <button className={classes.uploadbutton}><span className={classes.uploadicon}><MdFileUpload/></span> CREATE</button>
  <button className={classes.signinbutton}>SIGN IN</button>
  <h1 className={classes.menubar}><HiOutlineMenu/></h1>
    </div>
    </div>
  )
}

export default Header