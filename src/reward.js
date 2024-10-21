import React from "react";
import classes from './App.module.css';
import manimg2 from './Asset/manimg2.png';
import onman2img from './Asset/onman2img.png';


function Reward ()
{
    return (
        <div className={classes.section1}>
            <div className={classes.section1text}>
                <div>
                    <h1 className={classes.autotext}>Automate<br/>Your Accounting<br/>System And Reap<br/>the Rewards</h1>
                </div>

                <div>
                    <p className={classes.whethertext}>Whether you are a small business, a non profit or a more medium size<br/>enterprise, we’ll help you find the perfect accounting solution. Run<br/>multiple companies? We can help with that too by centralizing<br/>accounting for all your businesses.</p>
                </div>

                <div>
                    <p className={classes.whethertext}>Our accounting software is designed to make your business life easier.<br/>It automates processes like pay-slips and tax calculations, so you don’t<br/>have to worry about pay-slip errors ever again. Pay your employees the<br/>right amount on time, every time with an efficient, intuitive accounting<br/>solution.</p>
                </div>

                <div>
                    <button className={classes.tryitbutton}>
                        <p className={classes.tryitbuttontext}>Try it Now</p>
                    </button>
                </div>
            </div>

            <div className={classes.section1img}>
                <div>
                    <img className={classes.manimg2} src={manimg2}/>
                </div>

                <div>
                    <img className={classes.onman2img} src={onman2img}/>
                </div>
            </div>
        </div>
    );
}
export default Reward;