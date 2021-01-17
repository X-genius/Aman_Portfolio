import React from 'react';
import './contactUs.css';
import emailjs from 'emailjs-com';
import Aos from 'aos';
import 'aos/dist/aos.css';
const contactUs = () => {
    
    function sendEmail(e)
    {
        e.preventDefault();

        emailjs.sendForm('gmail_Account', 'Portfolio_Emails', e.target, 'user_IQ44KnUKD8345Ztre3gSS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
    }

    Aos.init({duration : 2000});

    return (
        <div id = "contactUs" className = "contactContainer"> 
           <h1 className = "contactHeading" data-aos = "fade-up-right" data-aos-offset = "50">Contact Us</h1>
            
           <div className = "contactUsFormContainer" data-aos = "flip-down" data-aos-offset = "100">
             <form onSubmit = {sendEmail}>
                    <label for = "name" className = "nameHeading">Name</label>
                    <input type = "text" name = "Name" className = "namePlaceholder" placeholder = "Enter Valid Name"/>

                    <label for = "email" className = "emailHeading">Email</label>
                    <input type = "email" name = "Email" className = "emailPlaceholder" placeholder = "Enter Valid Email"/>

                    <label for = "message" className = "msgHeading">Message</label>
                    <textarea type = "text" name = "Message" className = "msgPlaceholder" placeholder = "Write Something......."/>

                    <input type = "submit" value = "Send Message"/>
             </form>
           </div>
        </div>
    )
}

export default contactUs
