import Head from "next/head";
import { How } from "../components/how";
import Slider from "../components/slider";
import Trustlogo from "../components/trustlogo";
import { Products } from "../components/products";
import { Twitterman } from "../components/twittwerman";
import unfetch from "isomorphic-unfetch";
import slug from "slug";

export default function Home({}) {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{/* <Blog /> */}
				{/* <Slider /> */}
				<Trustlogo />
				<How />
				<Products />
				<Twitterman />
			</main>

			<style jsx>{``}</style>
		</div>
	);
}

// export async function getStaticProps() {
// 	const data = await unfetch("https://mweb-api.circleboom.com/landing-pages/");
// 	const character = await data.json();

// 	return {
// 		props: {
// 			character,
// 		},
// 	};
// }
