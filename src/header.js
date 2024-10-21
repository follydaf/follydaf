import React from "react";
import classes from './App.module.css';
import promiximg from '../src/Asset/promiximg.png';
import frame1 from '../src/Asset/frame1.png';
import softline from '../src/Asset/softline.png';
import manimg1 from './Asset/manimg1.png';


function Header ()
{
    return (
        <div className={classes.header}>
            <div className={classes.topheader}>
                <div>
                    <img className={classes.promiximg} src={promiximg}/>  
                </div>

                <div className={classes.promixtextdiv}>
                    <p className={classes.promixtext}>Home</p>

                    <p className={classes.promixtext}>Features</p>

                    <p className={classes.promixtext}>Pricing</p>

                    <p className={classes.promixtext}>FAQs</p>
                </div>

                <div className={classes.promixbuttondiv}>
                    <button className={classes.loginbutton}>
                        <p className={classes.loginbuttontext}>Log In</p>
                    </button>

                    <button className={classes.signupbutton}>
                        <p className={classes.signbuttontext}>Sign Up</p>
                    </button>
                </div>
            </div>

            <div className={classes.lowheader}>
                <div>
                    <img className={classes.frame1} src={frame1}/>
                </div>

                <div className={classes.frame1content}>
                    <div className={classes.content1}>
                        <div className={classes.seamlesstextdiv}>
                            <h1 className={classes.seamlesstext}>Seamless Accounting Software for SMEs</h1>

                            <img className={classes.softline} src={softline}/>
                        </div>

                        <div className={classes.smallseamlesstextdiv}>
                            <p className={classes.smallseamlesstext}>Automate your accounting management system today. Our software solutions will help streamline account management</p>
                        </div>

                        <div className={classes.buttonandtext}>
                            <button className={classes.startedbutton}>
                                <p className={classes.startedbuttontext}>Get started</p>
                            </button>

                            <p className={classes.howitworkstext}>See How it Works</p>
                        </div>

                        <div className={classes.busandcost}>
                            <div className={classes.businesstextdiv}>
                                <p className={classes.hundred}>10K</p>
                                <p className={classes.businesstext}>Businesses</p>
                            </div>

                            <div className={classes.customertextdiv}>
                                <p className={classes.hundred}>100K</p>
                                <p className={classes.businesstext}>Customers</p>
                            </div>
                        </div>
                    </div>

                    <div className={classes.content2}>
                        <img className={classes.manimg1} src={manimg1}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;