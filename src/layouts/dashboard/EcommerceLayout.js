// import node module libraries
import React, { useState } from 'react';
import { useOutlet } from 'react-router-dom';

// import sub components
import NavbarVertical from './NavbarVertical';
import HeaderDefault from './HeaderDefault';

// import context provider
import CartProvider from 'context/providers/CartProvider';

const DashboardIndex = (props) => {
	const outlet = useOutlet();
	const { children, className, overflowHidden } = props;
	const [showMenu, setShowMenu] = useState(true);
	const ToggleMenu = () => {
		return setShowMenu(!showMenu);
	};
	return (
		<div
			id="db-wrapper"
			className={`${overflowHidden ? 'chat-layout' : ''} ${showMenu ? '' : 'toggled'
				}`}
		>
			<div className="navbar-vertical navbar">
				<NavbarVertical
					showMenu={showMenu}
					onClick={(value) => setShowMenu(value)}
				/>
			</div>
			<section id="page-content">
				<div className="header">
					<HeaderDefault
						data={{
							showMenu: showMenu,
							SidebarToggleMenu: ToggleMenu
						}}
					/>
				</div>
				<div className={`container-fluid ${className ? className : 'p-4'}`}>
					{children}
					<CartProvider>{outlet}</CartProvider>
				</div>
			</section>
		</div>
	);
};
export default DashboardIndex;
