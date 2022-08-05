import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import '../styles/components/footer.scss'

function Footer() {
  return (
    <div className="footer">
      <div className="copyright">&copy; All rights reserved, Suraj Mishra, 2022</div>
      <div className="contact"><a href="#">Contact me</a></div>
      <div className="social-channels">
        <FacebookIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}

export default Footer;
