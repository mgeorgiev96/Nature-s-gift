import React from 'react'

function Footer() {
    return (
        <footer>
            <h3>Need help?</h3>
            <p>Contact our home office</p>
            <p>UK - London, Brick Lane</p>
            <div>
            <img src="https://img.icons8.com/office/80/000000/facebook-new.png"/>
            <img src="https://img.icons8.com/office/80/000000/linkedin.png"/>
            <img src="https://img.icons8.com/office/80/000000/send-mass-email.png"/>
            </div>
            <div className="left_footer">
                <p>privacy Policy</p>
                <p>Terms and Conditions</p>
                <p>About</p>
            </div>
            <div className="right_footer">
                <p>Return / exchanges</p>
                <p>Shipping Info</p>
                <p>process</p>
            </div>
        </footer>
    )
}

export default Footer;
