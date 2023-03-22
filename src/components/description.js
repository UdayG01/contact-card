import React from "react"

export default function Description({darkMode}){


	const styleDscHead = {
		fontFamily: 'Inter',
		fontStyle: "normal",
		fontWeight: "700",
		fontSize: "25px",
		lineHeight: "15%",
		color: darkMode ? "#F5F5F5" : "rgba(43, 40, 58, 1)",
		marginRight: "auto"
	}

	const styleDscTxt = {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '11px',
		lineHeight: '150%',
		color: darkMode ? 'rgba(220, 220, 220, 1)' : 'rgba(74, 78, 116, 1)',
		textAlign: 'left'
	}
	return(
		<div className={darkMode ? "description-text" : "light-mode-dsc"}>
			<h2 style={styleDscHead}>About</h2>
			<p style={styleDscTxt}>enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod</p>

			<h2 style={styleDscHead}>Interests</h2>
			<p style={styleDscTxt}>fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo</p>
		</div>
		)
}