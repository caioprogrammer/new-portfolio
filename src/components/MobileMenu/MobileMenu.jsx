import React from 'react';
import './MobileMenu.scss';

const MobileMenu = () => {
  return (
        <nav className="mainMenu">
			<div className='teste' id='menuCloser'>X</div>
				<ul>
					<li>
						<a href="#/">About me</a>
					</li>
					<li>
						<a href="#/">Services</a>
					</li>
					<li>
						<a href="#/">Projects</a>
					</li>
					<li>
						<a href="#/">Contact</a>
					</li>

				</ul>
			</nav>
  )
}

export default MobileMenu