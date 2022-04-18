import React, { useState } from "react";
import styles from "../styles/components/Layout.module.scss";
import Image from "next/image";
import logo from "../public/circleboom_logo.svg";
import Link from "next/link";

const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const openMenu = () => setIsOpen(!isOpen);

	return (
		<div>
			<header className={styles.header}>
				<nav className={styles.navbar}>
					<a className={styles.navlogo}>
						<Image
							src={logo}
							alt="Circleboom Logo"
							width={200}
							height={50}
							placeholder="Circleboom Logo"
						/>
					</a>
					<ul
						className={
							isOpen === false
								? styles.navmenu
								: styles.navmenu + " " + styles.active
						}
					>
						<li className={styles.navitem}>
							<a className={styles.navlink}>Home</a>
						</li>
						<li className={styles.navitem}>
							<a className={styles.navlink}>Products</a>
						</li>
						<li className={styles.navitem}>
							<a className={styles.navlink}>Features</a>
						</li>
						<li className={styles.navitem}>
							<a className={styles.navlink}>Prices</a>
						</li>
						<li className={styles.navitem}>
							<a className={styles.navlink}>Blog</a>
						</li>
						<li className={styles.navitem}>
							<a className={styles.navlink}>Contact Us</a>
						</li>

						<li className={styles.navbutton}>
							<a className={styles.navlink}>Get Started / Login</a>
						</li>
					</ul>

					<button
						className={
							isOpen === false ? styles.hamburger : +" " + styles.active
						}
						onClick={openMenu}
					>
						<span className={styles.bar}></span>
						<span className={styles.bar}></span>
						<span className={styles.bar}></span>
					</button>
				</nav>
			</header>
			{children}
		</div>
	);
};

export default Layout;
