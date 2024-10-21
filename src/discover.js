import React from "react";
import classes from './App.module.css';
import curvy from './Asset/curvy.png';
import star from './Asset/Star.png';


function Discover() {
    return (
        <div className={classes.section7body}>
            <div className={classes.section7}>
                <div>
                    <h1 className={classes.section7toptext}>Discover the benefits of our</h1>
                </div>
                <div>
                    <h1 className={classes.section7downtext}>accounting solutions</h1>
                </div>

                <div className={classes.items}>
                    <img className={classes.curvy} src={curvy}/>

                    <img className={classes.star} src={star}/>
                </div>

                <div>
                    <button className={classes.signupnowbutton}>
                        <p className={classes.signupnowtext}>Sign Up now</p>
                    </button>
                </div>
            </div>
        </div>

    );
}
export default Discover;