import styled from 'styled-components'

export const Menu = styled.div`

header .container {

position: relative;
top: 0;
left: 0;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
padding: 20px 100px;
transition: 0.5s ease;

}

header .logo {

position: relative;
max-width: 150px;

}


header nav ul {

position: relative;
display: flex;

}

header nav ul li {

list-style: none;

}

header nav ul li a {

position: relative;
color: #667085;
font-size: 1rem;
font-weight: 500;
text-decoration: none;
margin: 20px;
transition: 0.3s ease;

}

header nav ul li a:hover {

  color: #fff;
  transition: 0.3s ease;

}

 header .logo h2 a {
	text-decoration: none;
	font-size: 1.7rem;
	font-weight: bold;
	color: #e4e4e4;
}

 header .logo h2 span {

	display: inline-block;
	width: 15px;
	height: 15px;
	margin-right: 0.5rem;
	border-radius: 4px;
	background: #8257e6;
	vertical-align: middle;

}

.home {

   color: #8257e6;
   border: 2px solid #8257e6;
   padding: 3px;
   transition: all 0.3s;

}

.home:hover {

    color: #fff;
    border: 2px solid #fff;
    padding: 3px;
    transition: all 0.3s;

}


@media (max-width: 991px) {

header .container {

display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem 1rem;


}

header .logo {

position: relative;
max-width: 200px;

}

.menu-section nav {

display: none;

}

.one, .two, .three {

background-color: #fff;
height: 5px;
width: 100%;
margin: 6px;
transition-duration: 0.3s;

}

.menu-toggle {

width: 2rem;
height: 3rem;
margin-right: 1rem;
margin-top: 1rem;

}

.menu-section.on {

position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: rgba(000,000,000,.9);
z-index: 10; 
display: flex;
justify-content: center;
align-items: center;

}

.menu-section.on nav {

display: block;

}

.menu-section.on .menu-toggle {

position: absolute;
right: 1.5rem;
top: 1.0rem;

}

.menu-section.on .menu-toggle .one {

transform: rotate(45deg) translate(7px, 7px);
background-color: #fff;

}

.menu-section.on .menu-toggle .two {

opacity: 0;

}

.menu-section.on .menu-toggle .three {

transform: rotate(-45deg) translate(8px, -9px);
background-color: #fff;

}

.menu-section.on nav ul {

text-align: center;
flex-direction: column;
display: flex;

}

.menu-section.on nav ul a { 

transition-duration:  0.5s;
font-size: 1.7rem;
display: flex;
justify-content: center;
flex-direction: column;
color: #fff;
padding: 0.2rem;

}



}

`



export const Container = styled.div`

 .banner {
	margin-top: 8rem;
}

 .banner .container {	
	padding: 0px 7%;
}

 .banner .details {	
	width: 30rem;
	margin-bottom: 40px;
	color: #e4e4e4;
}

 .banner .details h1 {	
	font-size: 50px;
	font-weight: 600;
	line-height: 1;
	margin-bottom: 20px;
}

 .banner .cta a {
	display: inline-block;
	text-decoration: none;
	color: #e4e4e4;
	transition-duration: .3s;
	transition-property: background-color, color;
}

 .banner .cta a:first-child {
	margin-right: 30px;
	background: #7357FA;
	padding: 8px 35px;
	border-radius: 4px;
	color: #fff;
}

 .banner .cta a:first-child:hover {
	background-color: #5336e2;
}

 .banner .cta a:last-child:hover {
	color: #fff;
}






@media (max-width: 991px) {

  

 .banner .container .details{

	width: 100%;

 }

 .banner .container .details h1 {

	font-size: 2rem;
 
}

.banner .container .details p {

		font-size: 1rem;

}

}


`