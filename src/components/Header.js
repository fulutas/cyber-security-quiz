import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<header className="flex items-center gap-2">
				<Link href="/" className='text-7xl bg-gradient-to-r from-orange-500 via-blue-400 to-white bg-clip-text text-transparent pb-5' >CyberGame</Link>
			</header>
		</>
	);
}

export default Header;
