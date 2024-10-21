import React from "react";
import classes from './App.module.css';


function Question() {
    return (
        <div className={classes.section6div}>
            <div>
                <h1 className={classes.faqtext}>FAQs</h1>
            </div>

            <div>
                <p className={classes.seeanswertext}>See answers to some frequently asked questions here</p>
            </div>

            <div>
                <button className={classes.question1button}>
                    <p className={classes.question1text}>Is there a free trial available?</p>
                    <select className={classes.hshshs}></select>
                </button>
            </div>

            <div>
                <button className={classes.question2button}>
                    <div className={classes.question2topdiv}>
                        <p className={classes.question2toptext}>Can I change my plan later?</p>
                        <select className={classes.hshshs}></select>
                    </div>
                    <p className={classes.question2downtext}>Yes, you can change your plan at anytime</p>
                </button>
            </div>

            <div>
                <button className={classes.question3button}>
                    <p className={classes.question3text}>What is your Cancellation Policy?</p>
                    <select className={classes.hshshs}></select>
                </button>
            </div>
        </div>

    );
}
export default Question;