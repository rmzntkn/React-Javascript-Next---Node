import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";
import { ReactElement } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/layout.module.scss";

import { useState } from "react";

export const Layout = ({ characters }) => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<div>
			<header className={styles.header}>
				<div className={styles.navbar}>
					<div>
						<Image
							src={logo}
							alt="Picture of the author"
							width={300}
							height={70}
						/>
					</div>

					{/* <div
						className={
							click
								? styles.nav_items
								: styles.nav_items && styles.nav_items.active
						}
					> */}
					<div
						className={
							!click
								? `${styles.nav_items}`
								: `${styles.nav_items} ${styles.active}`
						}
					>
						<ul>
							<li>
								<Link href="/">
									<a>OUR WORK</a>
								</Link>

								<div className={styles.drop_list}>
									<div className={styles.dropbox}>
										{/* <Link href="/">
											<a>Clean Water</a>
										</Link>
										<Link href="/">
											<a>Education</a>
										</Link>
										<Link href="/">
											<a>Health</a>
										</Link>
										<Link href="/">
											<a>Children</a>
										</Link>
										<Link href="/">
											<a>Refugee</a>
										</Link> */}
									</div>
								</div>
							</li>
							<li>
								<Link href="/">
									<a>RELIEF</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a>GROUPS</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a>BLOGS</a>
								</Link>
							</li>
							<Link href="/">
								<a>Sign Up</a>
							</Link>
						</ul>
					</div>
					<div className={styles.navright}>
						<div onClick={handleClick}>
							<FontAwesomeIcon icon={click ? faTimes : faBars} />
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};
