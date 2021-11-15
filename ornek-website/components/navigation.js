import Link from "next/link";

import styles from "./nav.module.css";

function Navigation() {
	return (
		<nav>
			<Link href="/">
				<a className={styles.link}>Home Page</a>
			</Link>

			<Link href="/about">
				<a style={{ color: "purple" }}>About Us</a>
			</Link>
		</nav>
	);
}

export default Navigation;
