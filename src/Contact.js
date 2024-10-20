import React from 'react';

function Contact() {
    return (
        <>
        <div className="contact-section" id="contact">
            <div className="contact-left">
                <h2>Follow us!</h2>
            </div>
            <div className="contact-right">
                <div className="social-links">
                    <a href="https://www.facebook.com/RajasthanRoyals/" target="_blank" rel="noreferrer">
                        <img src="./img/fb.svg" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com/rajasthanroyals" target="_blank" rel="noreferrer">
                        <img src="./img/twitter.svg" alt="Twitter" />
                    </a>
                    <a href="https://www.instagram.com/rajasthanroyals/?hl=en" target="_blank" rel="noreferrer">
                        <img src="./img/insta.svg" alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/company/rajasthanroyals" target="_blank" rel="noreferrer">
                        <img src="./img/linkedin.svg" alt="LinkedIn" />
                    </a>
                </div>
            </div>
           
        </div>
         <hr/>
         <p className='copyright'>All copyRights are reserved.</p>
        </>
    );
}

export default Contact;
