import './Footer.css';
import './Linkedin.png';
import './Twitter.png';
import './f_logo.png.png';
import './yt_icon.png';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (

        <Navbar fixed="bottom" bg="dark" variant="dark">
        
                
                    <a href="https://www.linkedin.com/company/c-h-robinson/">
                        <img src="./Linkedin.png" alt="LinkedIn" height="42" width="42" hspace="5"/></a>
                    <a href="https://twitter.com/CHRobinson">
                        <img src="./Twitter.png" alt="Twitter" height="40" width="50" hspace="3" /></a> 
                    <a href="https://www.facebook.com/CHRobinsonInc/">
                            <img src="./f_logo.png" alt="Facebook" height="40" width="50" hspace="3" /></a>  
                    <a href="https://www.youtube.com/user/CHRobinsonWorldwide">
                            <img src="./yt_icon.png" alt="Youtube" height="40" width="50" hspace="3" /></a>
                        
      <p class="m-0 text-center text-white small"><br />
        Copyright &copy; Sharifa Simon 2020</p>
    
            </Navbar>
      
    );
  }
  
  export default Footer;