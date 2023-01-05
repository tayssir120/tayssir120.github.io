import React , {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
               <header class="ht-header">
	<div class="container">
		<nav class="navbar navbar-default navbar-custom">
				<div class="navbar-header logo">
				    <div class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					    <span class="sr-only">Toggle navigation</span>
					    <div id="nav-icon1">
							<span></span>
							<span></span>
							<span></span> 
						</div>
				    </div>
				    <a href="index-2.html"><img class="logo" alt='logo' src='assets/images/logo.jpg'/></a>
			    </div>
				
				<div class="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav flex-child-menu menu-left">
						<li class="dropdown first" >
							<Link to="/" >Home</Link>
						</li>
						<li class="dropdown first" >
							<Link to="/Pfes">Pfes</Link>
						</li>
						<li class="dropdown first">
							<Link to="/Etudiants">Etudiants</Link>
						</li>
						<li class="dropdown first">
							<Link to="/Enseignants">Enseignants</Link>
						</li>
							
					</ul>
					<ul class="nav navbar-nav flex-child-menu menu-right">					               
						
							<li class="btn signupLink"><a href="/user/signup">Welcome</a></li>
							<li><Link to="/Profile">Profile</Link></li>
							<li><Link to="/Logout">Logout</Link></li>

						<li><Link to="/Signin">LOG In</Link></li>
						<li><Link to="/Signup">sign up</Link></li>
						
					</ul>
				</div>
		
	    </nav>
	</div>
</header>
            </div>
        )
    }
}

export default Header