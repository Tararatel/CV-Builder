import React from 'react';

import './Header.scss'

import { ReactComponent as PrintIcon } from '../../assets/icons/print.svg';

const Header = ({onClick}) => {
	return (
		<header className='Header'>
			<div className='ui-container'>
				<div className='Header_content'>
					<span className='Header_logo'>CV Builder</span>
					<button className='ui-button isLink' onClick={onClick}>
						<PrintIcon style={{marginRight: '0.6rem'}} />
						Print
						</button>
				</div>
			</div>
		</header>
	)
}

export default Header;