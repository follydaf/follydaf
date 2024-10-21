import React from "react";
import classes from './App.module.css';


function Benefit ()
{
    return (
        <div className={classes.section3}>
            <div className={classes.section3textdiv}>
                <h1 className={classes.sect3discovertext}>Discover the benefits of our</h1>
                <h1 className={classes.sect3accounttext}>accounting solutions</h1>
            </div>

            <div className={classes.section3squarediv}>
                <div className={classes.square1div}>
                    <div className={classes.square1adiv}>
                        <h1 className={classes.squarebigtext}>Efficient</h1>

                        <p className={classes.squaresmalltext}>Our accounting software is designed to make your<br/>business life easier by minimising admin time</p>
                    </div>

                    <div className={classes.square1bdiv}>
                        <h1 className={classes.wsquarebigtext}>Compliant</h1>

                        <p className={classes.wsquaresmalltext}>A cloud-based system means you stay up to speed<br/>on the latest wage, salary and pensions legislation.</p>
                    </div>
                </div>

                <div className={classes.square2div}>
                    <div className={classes.square2adiv}>
                        <h1 className={classes.wsquarebigtext}>Accessible</h1>

                        <p className={classes.wsquaresmalltext}>Give your employees online access to payslips and<br/>expense claims.</p>
                    </div>

                    <div className={classes.square2bdiv}>
                        <h1 className={classes.squarebigtext}>Supportive</h1>

                        <p className={classes.squaresmalltext}>Our friendly team is always on hand to help with<br/>any questions or issues you may encounter.</p>
                    </div>
                </div>

                <div className={classes.square3div}>
                    <div className={classes.square3adiv}>
                        <h1 className={classes.squarebigtext}>Affordable</h1>

                        <p className={classes.squaresmalltext}>We offer competitive pricing on our HR and accounting<br/>systems. Request a quote today.</p>
                    </div>

                    <div className={classes.square3bdiv}>
                        <h1 className={classes.wsquarebigtext}>Automated</h1>

                        <p className={classes.wsquaresmalltext}>With automated and accurate tax calculations,<br/>there's no need for in-house tax expertise.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Benefit;