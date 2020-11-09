import './Footer.css';
import Linkedin from './Linkedin.png';
import Twitter from './Twitter.png';
import Facebook from './f_logo.png';
import Youtube from './yt_icon.png';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (

        <Navbar fixed="bottom" bg="dark" variant="dark">
            <p class="m-0 text-center text-white small"><br />
        &copy; Sharifa Simon 2020</p>
            <div className="footerContainer">

                <Navbar.Brand href="https://www.linkedin.com/company/c-h-robinson/">
                    <img
                        alt="Linkedin"
                        src={Linkedin}
                        width="30"
                        height="30"

                    />{' '}
                </Navbar.Brand>
                <Navbar.Brand href="https://twitter.com/CHRobinson">
                    <img
                        alt="Twitter"
                        src={Twitter}
                        width="30"
                        height="30"

                    />{' '}
                </Navbar.Brand>
                <Navbar.Brand href="https://www.facebook.com/CHRobinsonInc/">
                    <img
                        alt="Facebook"
                        src={Facebook}
                        width="30"
                        height="30"

                    />{' '}
                </Navbar.Brand>
                <Navbar.Brand href="https://www.youtube.com/user/CHRobinsonWorldwide">
                    <img
                        alt="Youtube"
                        src={Youtube}
                        width="30"
                        height="30"

                    />{' '}
                </Navbar.Brand>

            </div>
        </Navbar>

    );
}

export default Footer;