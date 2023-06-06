import React from "react";
import "./portfolio.css"

function Portfolio() {

    return (
        <div className="col-md-11 projects-container text-center">
            <div className="project">
                <div className="row">
                    <div className="col-md-12 photo-container text-center">
                        <img className="proj-images" alt="business" src="./business.jpg"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 info-container text-left">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <button className="btn-proj"><a className="external-link" href="https://github.com/Mikelang25/issue_management">Code Repo</a></button><br></br>
                                <button className="btn-proj"><a className="external-link" href="https://employee-issue-management.herokuapp.com/#/">Deployed App</a></button>
                            </div>
                        </div>
                        <h5 className="descr-header">Employee Management</h5>
                        <p className="descr-cont">An App that allows a manager or owner to store employee information as well as issues related to that employee.</p>
                        <h5 className="descr-header">Technologies Used</h5>
                        <p className="descr-cont">React, Bootstrap, AWS S3, Express.js, Victory.js, SQL/Sequelize, Heroku</p>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="row">
                    <div className="col-md-12 photo-container text-center">
                        <img className="proj-images" alt="soccer" src="./soccer.jpg"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 info-container text-left">
                        <div className="row">
                            <div className="col-md-12 text-center button-container">
                                <button className="btn-proj"><a className="external-link" href="https://github.com/Mikelang25/premierLeagueFanzone">Code Repo</a></button><br></br>
                                <button className="btn-proj"><a className="external-link" href="https://mikelang25.github.io/premierLeagueFanzone/">Deployed App</a></button>
                            </div>
                        </div>
                        <h5 className="descr-header">Premier League Fan Zone</h5>
                        <p className="descr-cont">An App based on English Premier League Soccer. The user will be able to view standings, recent results for their chosen team, and even video highlights.</p>
                        <h5 className="descr-header">Technologies Used</h5>
                        <p className="descr-cont">Boostrap, jQuery, Moment.js, Ajax, Graph.js</p>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="row">
                    <div className="col-md-12 photo-container text-center">
                        <img className="proj-images" alt="soccer" src="./calendar.jpg"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 info-container text-left">
                        <div className="row">
                            <div className="col-md-12 text-center button-container">
                                <button className="btn-proj"><a className="external-link" href="https://github.com/Mikelang25/userCalendar">Code Repo</a></button><br></br>
                                <button className="btn-proj"><a className="external-link" href="https://shrouded-hollows-79683.herokuapp.com/">Deployed App</a></button>
                            </div>
                        </div>
                        <h5 className="descr-header">Personal User Calendar</h5>
                        <p className="descr-cont">A personal weekly calendar view that allows a user to schedule personalized events as well as using various API to lookup restaurents, sporting events, etc and post them right to their calendar.</p>
                        <h5 className="descr-header">Technologies Used</h5>
                        <p className="descr-cont">Boostrap, Express.js, Heroku, JawsDB, MySQL/Sequelize, various APIs</p>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="row">
                    <div className="col-md-12 photo-container text-center">
                        <img className="proj-images" alt="soccer" src="./fight.jpg"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 info-container text-left">
                        <div className="row">
                            <div className="col-md-12 text-center button-container">
                                <button className="btn-proj"><a className="external-link" href="https://github.com/Mikelang25/hero_battle">Code Repo</a></button><br></br>
                                <button className="btn-proj"><a className="external-link" href="https://mikelang25.github.io/hero_battle/">Deployed App</a></button>
                            </div>
                        </div>
                        <h5 className="descr-header">Hero Battle</h5>
                        <p className="descr-cont">A game that requires the user to pick their characters carefully as they battle their way to the top.</p>
                        <h5 className="descr-header">Technologies Used</h5>
                        <p className="descr-cont">Boostrap, jQuery</p>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="row">
                    <div className="col-md-12 photo-container text-center">
                        <img className="proj-images" alt="soccer" src="./burger.jpg"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 info-container text-left">
                        <div className="row">
                            <div className="col-md-12 text-center button-container">
                                <button className="btn-proj"><a className="external-link" href="https://github.com/Mikelang25/burger">Code Repo</a></button><br></br>
                                <button className="btn-proj"><a className="external-link" href="https://hidden-scrubland-97770.herokuapp.com/">Deployed App</a></button>
                            </div>
                        </div>
                        <h5 className="descr-header">Make a Burger</h5>
                        <p className="descr-cont">Allows the user to create and eat a burger of their choice</p>
                        <h5 className="descr-header">Technologies Used</h5>
                        <p className="descr-cont">MySQL, Express.js, Express-Handlebars</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;