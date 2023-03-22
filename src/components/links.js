import React from "react"
import fbicon from "../images/Facebook Icon.png"
import igicon from "../images/Instagram Icon.png"
import ldicon from "../images/Linkedin Icon.png"
import twicon from "../images/Twitter Icon.png"
import ghicon from "../images/GitHub Icon.png"


export default function Links({darkMode}){

	const styleLinks = {
		display: "flex",
  		backgroundColor: darkMode ? "#161619" : "rgba(213, 212, 216, 1)",
  		borderRadius: "0 0 10px 10px",
  		width: "480px",
  		padding: "15px 41px",
  		justifyContent: "space-evenly" 
	}

	return(
		<div style={styleLinks}>
			<img src={twicon} alt="Twitter Icon" className="icons" />
			<img src={fbicon} alt="Facebook Icon" className="icons" />
			<img src={igicon} alt="Instagram Icon" className="icons" />
			<img src={ldicon} alt="Linkedin Icon" className="icons" />
			<img src={ghicon} alt="Github Icon" className="icons" />
		</div>
		)
}