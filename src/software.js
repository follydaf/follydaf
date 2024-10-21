import React from "react";
import classes from './App.module.css';
import pro1 from './Asset/pro1.png';
import box1img from './Asset/box1img.png';
import pro2 from './Asset/pro2.png';
import pro3 from './Asset/pro3.png';
import pro4 from './Asset/pro4.png';
import pro5 from './Asset/pro5.png';
import pro6 from './Asset/pro6.png';


function Software ()
{
    return (
        <div className={classes.section2}>
            <div className={classes.section2bigtext}>
                <h1 className={classes.whytext}>Why smart accounting software makes good</h1>
                <h1 className={classes.sensetext}>business sense</h1>
            </div>

            <div className={classes.section2smalltext}>
                <p className={classes.youretext}>Whether you are a small business, a non profit or a more medium size business, we’ll help you find the perfect accounting solution. Run multiple companies?</p>
                <p className={classes.helptext}>We can help with that too by centralizing accounting for all your businesses.</p>
            </div>

            <div className={classes.section2boxesdiv}>
                <div className={classes.boxes1div}>
                    <div className={classes.box1adiv}>
                        <img className={classes.pro1} src={pro1}/>

                        <h3 className={classes.box1compliancetext}>Stay on top of compliance</h3>

                        <p className={classes.box1readytext}>Are you ready to run your business more efficiently?<br/>There are many reasons to invest in a dedicated<br/>accounting system.</p>
                    </div>

                    <div className={classes.box1imgdiv}>
                        <img className={classes.box1img} src={box1img}/>
                    </div>
                </div>

                <div className={classes.boxes2div}>
                    <div className={classes.box2adiv}>
                        <img className={classes.pro2} src={pro2}/>

                        <h3 className={classes.box2compliancetext}>Stay on top of compliance</h3>

                        <p className={classes.box2readytext}>Are you ready to run your business more efficiently?<br/>There are many reasons to invest in a dedicated<br/>accounting system.</p>
                    </div>

                    <div className={classes.box2bdiv}>
                        <img className={classes.pro3} src={pro3}/>

                        <h3 className={classes.box2compliancetext}>Stay on top of compliance</h3>

                        <p className={classes.box2readytext}>Are you ready to run your business more efficiently?<br/>There are many reasons to invest in a dedicated<br/>accounting system.</p>
                    </div>

                    <div className={classes.box2cdiv}>
                        <img className={classes.pro4} src={pro4}/>

                        <h3 className={classes.box2compliancetext}>Stay on top of compliance</h3>

                        <p className={classes.box2readytext}>Are you ready to run your business more efficiently?<br/>There are many reasons to invest in a dedicated<br/>accounting system.</p>
                    </div>
                </div>

                <div className={classes.boxes3div}>
                    <div className={classes.box3adiv}>
                        <img className={classes.pro5} src={pro5}/>

                        <h3 className={classes.box3compliancetext}>Stay on top of compliance</h3>

                        <p className={classes.box3readytext}>Are you ready to run your business more efficiently?<br/>There are many reasons to invest in a dedicated<br/>accounting system.</p>
                    </div>

                    <div className={classes.box3bdiv}>
                        <img className={classes.pro6} src={pro6}/>

                        <h3 className={classes.box3compliancetext}>Stay on top of compliance</h3>

                        <p className={classes.box3readytext}>Are you ready to run your business more efficiently?<br/>There are many reasons to invest in a dedicated<br/>accounting system.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Software;