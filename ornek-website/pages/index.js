import Layout from "../components/layout";
import Head from "next/head";

function HomePage() {
	return (
		<Layout>
			<Head>
				<title>Home </title>
			</Head>
			<h1> Welcome to next.JS </h1>
			<style jsx>
				{`
					h1 {
						color: orange;
						background-color: red;
					}
				`}
			</style>
			<style global jsx>
				{`
					body {
						color: green;
					}
				`}
			</style>
		</Layout>
	);
}

export default HomePage;
