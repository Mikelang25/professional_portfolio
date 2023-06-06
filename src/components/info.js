import React from "react";
import "./info.css"

function Info() {

    return (
        <div className="col-md-12">
            <div className="row">
                <div className="picture-container col-md-3">
                    <img alt="profile" className="profile" src="/profile.jpg" />
                    <span className="span-info">Name: Michael Lang</span><br></br>
                    <span className="span-info">Location: New Milford, CT </span><br></br>
                    <span className="span-info">Email: Michaellang2525@yahoo.com</span>
                </div>
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-12 about-container">
                            <h5 className="head-about">About Me</h5>
                            <p className="par-about">
                                My name is Michael Lang and I currently reside in Danbury, CT with my wife and two dogs. I have a Bachelors degree in Finance from
                                Quinnipiac University, and my Masters in Information Systems from Marist College with a dual concentration in Systems Management and Data Analytics.
                                While studying at Quinnipiac University, I played two years on the men’s baseball team.
                                In my spare time I enjoy golfing, watching movies, and playing with my dogs.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 skills-container">
                            <h5>Education</h5>
                            <div className="row">
                                <div className="col-md-8">
                                    <span className="span-school">UConn Full Stack Web Development Bootcamp</span>
                                </div>
                                <div className="col-md-4">
                                    <span className="span-school"> Aug. 2019 - Apr. 2020</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <span className="span-school">Marist College - Masters Information Systems</span>
                                </div>
                                <div className="col-md-4">
                                    <span className="span-school"> Aug. 2016 - May. 2019</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                <span className="span-school">Quinnipiac University - Bachelors Business Finance</span>
                                </div>
                                <div className="col-md-4">
                                    <span className="span-school"> Aug. 2010 - May. 2014</span>
                                </div>
                            </div>                      
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 skills-container">
                            <h5 className="head-comp">Relevent Technical Proficiencies</h5>
                            <p className="par-skills">
                                HTML5, CSS3, JavaScript, React, jQuery, Bootstrap, Express.js, Node, MongoDB, Mongoose, MySQL, Sequelize, APIs (creation/utilization), AJAX, Git Bash.
                            <br></br>Additionally: Microsoft Access, Excel, Visio, VBA
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 job-container">
                    <h5 className="head-pos">Most Recent Position</h5>
                    <div className="row">
                        <div className="col-md-11 job">
                            <span>Rockit Solutions</span><br></br>
                            <span className="details">Software Developer/Data Aggregation Team</span><br></br>
                            <span className="details">Period: Feb. 2020 - Current</span><br></br><br></br>
                            <span className="resp">Responsibilities</span>
                            <ul>
                                <li>Worked on bugs and enhancements related to Rockit's proprietary system.</li>
                                <li>Responsible for implementing new clients onto Rockit's data aggregation platform</li>
                                <li>Assisted clients with data related issues</li>
                                <li>Designed, built, and maintained databases for normalization of bank data, tax reconciliation, and general operational support</li>
                                <li>Automated system trade processing</li>
                                <li>Responsible for implementing and maintaining custodian data feeds</li>
                                <li>Utilized scripting and scheduling tools to automated daily data jobs</li>
                            </ul>
                            <span>Other Positions</span>
                            <ul>
                                <li>Systems Analyst (Rockit Solutions)</li>
                                <li>Data Analyst (Rockit Solutions)</li>
                                <li>Procurement Analyst (USI Insurance)</li>
                                <li>Claims Representative (Allstate Insurance)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;