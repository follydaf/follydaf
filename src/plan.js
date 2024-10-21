import React from "react";
import classes from './App.module.css';
import markimg from './Asset/markimg.png';
import markimg2 from './Asset/markimg2.png';


function Plan() {
    return (
        <div className={classes.section5body}>
            <div className={classes.section5div}>
                <div>
                    <h1 className={classes.section5bigtext}>Pricing</h1>
                </div>

                <div>
                    <p className={classes.section5smalltext}>Choose the pricing that works for you and align to your business</p>
                </div>

                <div className={classes.section5longboxdiv}>
                    <div className={classes.longbox1}>
                        <div>
                            <h2 className={classes.freeplantext}>Free Plan</h2>
                        </div>

                        <div>
                            <h1 className={classes.money}>N0.00 <span className={classes.duration}>/30days</span></h1>
                        </div>

                        <div>
                            <p className={classes.useonlytext}>Use only for Personal use</p>
                        </div>

                        <div className={classes.othertextcontainer}>
                            <div className={classes.othertextdiv}>
                                <img src={markimg} />
                                <p className={classes.othertext}>1 user</p>
                            </div>

                            <div className={classes.othertextdiv}>
                                <img src={markimg} />
                                <p className={classes.othertext}>Account Receivables</p>
                            </div>

                            <div className={classes.othertextdiv}>
                                <img src={markimg} />
                                <p className={classes.othertext}>Account Payables</p>
                            </div>

                            <div className={classes.othertextdiv}>
                                <img src={markimg} />
                                <p className={classes.othertext}>General Ledger</p>
                            </div>

                            <div className={classes.othertextdiv}>
                                <img src={markimg} />
                                <p className={classes.othertext}>Cashbook</p>
                            </div>
                        </div>

                        <div>
                            <button className={classes.box1button}>
                                <p className={classes.box1buttontext}>Try for Free</p>
                            </button>
                        </div>
                    </div>

                    <div className={classes.longbox2}>
                        <div>
                            <h2 className={classes.basicplantext}>Basic Plan</h2>
                        </div>

                        <div>
                            <h1 className={classes.wmoney}>N50,000.00 <span className={classes.wduration}>/year</span></h1>
                        </div>

                        <div>
                            <p className={classes.forcommercial}>For Commercial use</p>
                        </div>

                        <div className={classes.wothertextcontainer}>
                            <div className={classes.wothertextdiv}>
                                <img src={markimg2} />
                                <p className={classes.wothertext}>2 users</p>
                            </div>

                            <div className={classes.wothertextdiv}>
                                <img src={markimg2} />
                                <p className={classes.wothertext}>Account Receivables</p>
                            </div>

                            <div className={classes.wothertextdiv}>
                                <img src={markimg2} />
                                <p className={classes.wothertext}>Account Payables</p>
                            </div>

                            <div className={classes.wothertextdiv}>
                                <img src={markimg2} />
                                <p className={classes.wothertext}>General Ledger</p>
                            </div>

                            <div className={classes.wothertextdiv}>
                                <img src={markimg2} />
                                <p className={classes.wothertext}>Cashbook</p>
                            </div>

                            <div className={classes.wothertextdiv}>
                                <img src={markimg2} />
                                <p className={classes.wothertext}>Journal Posting</p>
                            </div>

                            <div className={classes.wothertextdiv}>
                                <img src={markimg2} />
                                <p className={classes.wothertext}>Expenses Posting</p>
                            </div>
                        </div>

                        <div>
                            <button className={classes.box2button}>
                                <p className={classes.box2buttontext}>Purchase Plan</p>
                            </button>
                        </div>
                    </div>

                    <div className={classes.longbox3}>
                        <div>
                            <h2 className={classes.standardplantext}>Standard Plan</h2>
                        </div>

                        <div>
                            <h1 className={classes.money}>N60,000.00 <span className={classes.duration}>/year</span></h1>
                        </div>

                        <div>
                            <p className={classes.useonlytext}>Use only for Personal use</p>
                        </div>

                        <div className={classes.othertextcontainer}>
                            <div className={classes.othertextdiv}>
                                <img src={markimg} />
                                <p className={classes.othertext}>3 user</p>
                            </div>

                            <div className={classes.othertextdiv}>
                                <img src={markimg} />
                                <p className={classes.othertext}>All Basic</p>
                            </div>

                            <div className={classes.othertextdiv}>
                                <img src={markimg} />
                                <p className={classes.othertext}>Sales Invoice Generation</p>
                            </div>

                            <div className={classes.othertextdiv}>
                                <img src={markimg} />
                                <p className={classes.othertext}>Loan Application</p>
                            </div>

                            <div className={classes.othertextdiv}>
                                <img src={markimg} />
                                <p className={classes.othertext}>Inventory Management</p>
                            </div>
                        </div>

                        <div>
                            <button className={classes.box3button}>
                                <p className={classes.box3buttontext}>Try for Free</p>
                            </button>
                        </div>
                    </div>

                    <div className={classes.longbox4}>
                        <div>
                            <h2 className={classes.businessplantext}>Business Plan</h2>
                        </div>

                        <div>
                            <h1 className={classes.money}>Contact Us</h1>
                        </div>

                        <div className={classes.box4othertextcontainer}>
                            <div className={classes.othertextdiv}>
                                <img src={markimg} />
                                <p className={classes.othertext}>4 users and above</p>
                            </div>

                            <div className={classes.othertextdiv}>
                                <img src={markimg} />
                                <p className={classes.othertext}>All Features</p>
                            </div>

                            <div className={classes.othertextdiv}>
                                <img src={markimg} />
                                <p className={classes.othertext}>Customization Request</p>
                            </div>
                        </div>

                        <div>
                            <button className={classes.box4button}>
                                <p className={classes.box4buttontext}>Contact Us</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    );
}
export default Plan;