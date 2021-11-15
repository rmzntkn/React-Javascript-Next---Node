import Navigation from "./navigation";
import Head from "next/head";

function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>Next Js Website</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Navigation />
			<main>{children}</main>
			<footer>Designed by R@m@z@n</footer>
		</div>
	);
}

export default Layout;
