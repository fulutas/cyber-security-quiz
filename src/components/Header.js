import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="text-center text-7xl bg-gradient-to-r from-orange-500 via-orange-400 to-orange-400 bg-clip-text text-transparent pb-5">
			<Link href="/" >Siber Güvenlik Anketi</Link>
		</header>
	);
}

export default Header;
