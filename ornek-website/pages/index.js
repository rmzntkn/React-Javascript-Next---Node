import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import unfetch from "isomorphic-unfetch";
import slug from "slug";

function HomePage({ characters }) {
	return (
		<Layout>
			<Head>
				<title>Ana sayfa</title>
			</Head>
			<h1 className="title">THE RICK AND MORTY</h1>

			<ul>
				{characters.map((character) => (
					<li key={character.id}>
						<Link
							href="/character/[slug]"
							as={`/character/${slug(character.PageTitle)}-${character.id}`}
						>
							<a>{character.PageTitle}</a>
						</Link>
					</li>
				))}
			</ul>

			<style jsx>{``}</style>
		</Layout>
	);
}

export async function getStaticProps() {
	try {
		const data = await unfetch(
			"https://mweb-api.circleboom.com/landing-pages/"
		);
		//if (!data.ok) throw new Error("Problem getting location data");
		console.log(data);
		const characters = await data.json();

		return {
			props: {
				characters,
			},
		};
	} catch (err) {
		console.error(`${err} 💥  ERRRRRRROOOOOORRRRRRr`);

		// Reject promise returned from async function
		//throw err;
	}
}

export default HomePage;
