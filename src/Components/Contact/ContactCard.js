import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import RubberBand from 'react-reveal/RubberBand';
function ContactCard() {
    return (
        <>
        <div class = "hidden flex justify-evenly lg:flex ">
            <RubberBand>
            <a  href = "" className = " cursor-pointer ">  <LinkedInIcon style={{fontSize: 80 , color : "#0077b5"}} /> </a>
            </RubberBand>
            <RubberBand>
            <a href = "" className = "cursor-pointer"> <EmailIcon  style={{fontSize: 80 , color : "pink"}}/> </a>
            </RubberBand>
            <RubberBand>
            <a href = "" className = "cursor-pointer"> <InstagramIcon  style={{fontSize: 80 , color : "#E1306C"}}/> </a>
            </RubberBand>
            <RubberBand>
            <a href = "" className = "cursor-pointer"> <GitHubIcon  style={{fontSize: 70 , color : "white"}}/> </a>
            </RubberBand>
            <RubberBand>
            <a href = "" className = "cursor-pointer"> <WhatsAppIcon  style={{fontSize: 80 , color : "#128c7e"}}/> </a>
            </RubberBand>
            
           
         
        </div>
        <div class = "hidden flex md:ml-10 md:flex-col justify-evenly lg:hidden md:flex ">
            <RubberBand>
            <a  href = "" className = " cursor-pointer ">  <LinkedInIcon style={{fontSize: 50 , color : "#0077b5"}} /> </a>
            </RubberBand>
            <RubberBand>
            <a href = "" className = "cursor-pointer"> <EmailIcon  style={{fontSize: 50 , color : "pink"}}/> </a>
            </RubberBand>
            <RubberBand>
            <a href = "" className = "cursor-pointer"> <InstagramIcon  style={{fontSize: 50 , color : "#E1306C"}}/> </a>
            </RubberBand>
            <RubberBand>
            <a href = "" className = "cursor-pointer"> <GitHubIcon  style={{fontSize: 45 , color : "white"}}/> </a>
            </RubberBand>
            <RubberBand>
            <a href = "" className = "cursor-pointer"> <WhatsAppIcon  style={{fontSize: 50 , color : "#128c7e"}}/> </a>
            </RubberBand>
            
           
         
        </div>
        </>
    )
}

export default ContactCard
