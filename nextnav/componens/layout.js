import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";
import { ReactElement } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/layout.module.scss";

import { useState } from "react";

export const Layout = ({ simpson, section }) => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<div>
			{/* <div>{simpson.characters.results.map((character) => character.name)}</div> */}
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
										{section === "main" ? (
											<div>
												{simpson.results.map((character) => (
													<Link
														href={"/posts/" + character.id}
														key={character.id}
													>
														<a>
															<h3>{character.name}</h3>
														</a>
													</Link>
												))}
											</div>
										) : undefined}

										{section === "about" ? (
											<div>
												{simpson.results.map((character) => (
													<Link
														href={"/posts/" + character.id}
														key={character.id}
													>
														<a>
															<h3>{character.id}</h3>
														</a>
													</Link>
												))}
											</div>
										) : undefined}
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
										</Link>
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
						{/* <div
							className={
								click ? styles.hamburger_icon : styles.hamburger_icon_changed
							}
							onClick={() => click(!click)}
						> */}
						<div
							className={
								!click
									? `${styles.hamburger_icon}`
									: `${styles.hamburger_icon} ${styles.hamburger_icon_changed}`
							}
							onClick={handleClick}
						>
							<div className={styles.bar1}></div>
							<div className={styles.bar2}></div>
							<div className={styles.bar3}></div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};
