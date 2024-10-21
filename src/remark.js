import React from "react";
import classes from './App.module.css';
import button from './Asset/button.png';


function Remark() {
    return (
        <div className={classes.section8}>
            <div className={classes.section8textdiv}>
                <p className={classes.section8smalltext}>Copyright © 2023 Promix<br />All rights reserved</p>
            </div>

            <div>
                <h3 className={classes.section8bigtext}>Product</h3>
                <p className={classes.section8smalltext}>Individual</p>
                <p className={classes.section8smalltext}>Businesses</p>
                <p className={classes.section8smalltext}>Request Demo</p>
                <p className={classes.section8smalltext}>Pricing</p>
            </div>

            <div>
                <h3 className={classes.section8bigtext}>Legal</h3>
                <p className={classes.section8smalltext}>Privacy Policy</p>
                <p className={classes.section8smalltext}>Terms of Service</p>
            </div>

            <div>
                <h3 className={classes.section8bigtext}>Resources</h3>
                <p className={classes.section8smalltext}>FAQs</p>
                <p className={classes.section8smalltext}>Blog</p>
                <p className={classes.section8smalltext}>Career</p>
                <p className={classes.section8smalltext}>Customer stories</p>
            </div>

            <div>
                <h3 className={classes.section8bigtext}>Contact Us</h3>
                <p className={classes.section8smalltext}>info@brookessoftware.com</p>
                <p className={classes.section8smalltext}>+234 816 124 1827 , +234 806 020 2011</p>
                <img className={classes.button} src={button}/>
            </div>
        </div>

    );
}
export default Remark;