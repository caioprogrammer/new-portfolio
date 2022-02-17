import React from 'react';
import './MobileMenu.scss';

const MobileMenu = () => {
  return (
        <nav className="mainMenu">
			<div className='teste' id='menuCloser'>
			<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#FFF" strokeWidth={2} d="m3 3 18 18M3 21 21 3"/></svg>
			</div>
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