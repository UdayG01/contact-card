import React from "react"
import profilepic from "../images/lorem_man.jpg"
import mail from "../images/Mail.png"

export default function Contact({darkMode})
{
	const styleH2 = {  
		fontWeight: "700",
  		fontSize: "25px",
  		lineHeight: "30px",
  		textAlign: "center",
  		color: darkMode ? "white" : "rgba(43, 40, 58, 1)",
  		margin: "0",
  		marginTop: "20px"}

	const styleH4 = {
		margin: "0",
  		marginTop: "10px",
  		fontWeight: "400",
  		fontSize: "12.8px",
  		lineHeight: "15px",
  		textAlign: "center",
  		color: darkMode ? "#F3BF99" : "rgba(244, 125, 39, 1)" 
	}

	const styleP = {
		color: darkMode ? "white" : "rgba(74, 78, 116, 1)",
  		fontWeight: "400",
  		fontSize: "10.24px",
  		lineHeight: "150%"
	}

	return(

		<div className={darkMode ? "contact-bar" : "light-mode-contact"}>
			<img className="lorem-pic" src={profilepic} alt="lorem_man" />
			<h2 style={styleH2}>Lorem Guy</h2>
			<h4 style={styleH4}>Text Developer</h4>
			<p style={styleP}>loremguy.website</p>
			<button className="email-button"><img src={mail} alt="mail-icon"/> Email</button>
		</div>
		)
}