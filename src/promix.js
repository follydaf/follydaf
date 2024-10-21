import React from "react";
import classes from './App.module.css';
import circle1 from './Asset/circle1.png';
import circle3 from './Asset/circle3.png';
import circle5 from './Asset/circle5.png';
import circle2 from './Asset/circle2.png';
import circle4 from './Asset/circle4.png';
import circle6 from './Asset/circle6.png';
import phone  from './Asset/phone.png';


function Promix ()
{
    return (
        <div className={classes.section4div}>
            <div className={classes.section4part1div}>
                <div>
                    <h1 className={classes.section4bigtext}>How it works</h1>
                </div>

                <div>
                    <p className={classes.section4smalltext}>Automate your accounting management system today.<br/>Our software solutions will help streamline accounting<br/>management</p>
                </div>

                <div className={classes.section4cubesdiv}>
                    <div className={classes.cube1div}>
                        <div className={classes.cube1adiv}>
                            <img className={classes.circle1} src={circle1}/>

                            <h1 className={classes.wbigcubetext}>Sign up</h1>

                            <p className={classes.wsmallcubetext}>Choose the favorite pricing and<br/>sign up</p>
                        </div>

                        <div className={classes.cube1bdiv}>
                            <img className={classes.circle3} src={circle3}/>

                            <h1 className={classes.bigcubetext}>Link Accounts</h1>

                            <p className={classes.smallcubetext}>Choose the favorite pricing and<br/>sign up</p>
                        </div>

                        <div className={classes.cube1cdiv}>
                            <img className={classes.circle5} src={circle5}/>

                            <h1 className={classes.bigcubetext}>Link Accounts</h1>

                            <p className={classes.smallcubetext}>Choose the favorite pricing and<br/>sign up</p>
                        </div>
                    </div>

                    <div className={classes.cube2div}>
                        <div className={classes.cube2adiv}>
                            <img className={classes.circle2} src={circle2}/>

                            <h1 className={classes.bigcubetext}>Pricing</h1>

                            <p className={classes.smallcubetext}>Choose the favorite pricing and<br/>sign up</p>
                        </div>

                        <div className={classes.cube2bdiv}>
                            <img className={classes.circle4} src={circle4}/>

                            <h1 className={classes.bigcubetext}>Add Employee</h1>

                            <p className={classes.smallcubetext}>Choose the favorite pricing and<br/>sign up</p>
                        </div>

                        <div className={classes.cube2cdiv}>
                            <img className={classes.circle6} src={circle6}/>

                            <h1 className={classes.bigcubetext}>Pricing</h1>

                            <p className={classes.smallcubetext}>Choose the favorite pricing and<br/>sign up</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <img className={classes.phone} src={phone}/>
            </div>
        </div>
        
    );
}
export default Promix;
