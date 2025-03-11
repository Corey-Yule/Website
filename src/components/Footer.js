import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thank you for viewing my website!
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlFDKXwngZfmXPWpkKnbvCBpgnKrXBnTvfwSjGnklWFBnWzXDcJhbdwMGCMxflxRmZhCXq'>Contact Email</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/1coreyyule/'>Instagram</Link>
            <Link to='https://www.facebook.com/people/Corey-Yule/pfbid02U13yD16r4xz48oC7iDvpg4tDFstUKt6LPEwzysEhHdjhVnNgpou4tC33ivW1yCzql/'>Facebook</Link>
            <Link to='https://www.linkedin.com/in/corey-yule-19382b27a/'>LinkedIn</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Corey
              <img src="/logo.png" alt="Logo" className="navbar-logo-img" />
            </Link>
          </div>
          <small class='website-rights'>Corey ©2025</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/1coreyyule/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/people/Corey-Yule/pfbid02U13yD16r4xz48oC7iDvpg4tDFstUKt6LPEwzysEhHdjhVnNgpou4tC33ivW1yCzql/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.linkedin.com/in/corey-yule-19382b27a/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
