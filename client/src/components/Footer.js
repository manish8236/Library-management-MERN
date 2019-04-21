import React, { Component } from 'react';
import './Carousel.css';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';


class Footer extends Component{

  render(){

    return(


<Container id="sizing">
      <Navbar expand='sm' className='mb-5'>
            <Nav className='navbar-center '>
              <NavItem color='info'>
                <NavLink color='info' href="https://www.linkedin.com/in/manish-pal-141543160"target="_blank">
             <i class="fab fa-linkedin fa-3x"></i></NavLink>
              </NavItem>
              <NavItem>
            <NavLink href="https://github.com/manish8236"target="_blank">
              <i class="fab fa-github fa-3x"></i> </NavLink>
              </NavItem>
          <NavItem>
            <NavLink href="https://www.facebook.com"target="_blank"><i class="fab fa-facebook-square fa-3x"></i>
            </NavLink>
          </NavItem>
            </Nav>
      </Navbar>
  </Container>

      // <div id="lab_social_icon_footer">
      //     // <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
      //   <div className="container">
      //     <div className="text-center center-block">
              // <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
	    //         <a href="https://twitter.com/bootsnipp"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
	    //         <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
	    //         <a href="mailto:#"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
      //     </div>
      //   </div>
      // </div>

    );
  }

}
export default Footer;
