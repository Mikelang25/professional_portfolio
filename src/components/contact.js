import React, { Component } from "react";
import './contact.css'

class Contact extends Component {

    state = {
        user_name: "",
        user_email: "",
        user_number: "",
        message: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    submitMessage = event => {
        // event.preventDefault();
        // console.log("This is working")

        // emailjs.sendForm('gmail', 'template_iU01UG6f', event.target, 'user_Xy4JKdwT8EyRY5Nfye26e')
        //     .then((result) => {
        //         console.log(result.text);

        //         this.setState({
        //             user_name: "",
        //             user_email: "",
        //             user_number: "",
        //             message: ""
        //         })
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        
    }

    render() {
        return (
            <div className="col-md-10">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 contact-container">
                        <h5 className="head-contact">Contact Me</h5>
                        <form id="contact-form" onSubmit={this.submitMessage}>
                            <label className="lbl-contact">Name</label><br></br>
                            <input className="inp-name" name="user_name" type="text" required placeholder="Enter your name" onChange={this.handleInputChange} value={this.state.user_name}></input><br></br>
                            <label className="lbl-contact" required>Email</label><br></br>
                            <input className="inp-email" type="text" name="user_email" placeholder="friend@friends.com" onChange={this.handleInputChange} value={this.state.user_email}></input><br></br>
                            <label className="lbl-contact">Phone</label><br></br>
                            <input className="inp-phone" type="text" name="user_number" placeholder="(999)-999-9999" onChange={this.handleInputChange} value={this.state.user_number}></input><br></br>
                            <label className="lbl-contact">Message</label><br></br>
                            <textarea className="inp-message" required placeholder="Leave a message!" name="message" onChange={this.handleInputChange} value={this.state.message}></textarea><br></br>
                            <input type="submit" value="Send"></input>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }
}

export default Contact;