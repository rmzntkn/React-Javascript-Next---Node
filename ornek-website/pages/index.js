import Layout from "../components/layout";
import { useRouter } from "next/router";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import slug from "slug";

function HomePage({ characters }) {
	return (
		<Layout>
			<Head>
				<title>Home </title>
			</Head>
			<h1> The Rick And</h1>

			<style jsx>
				{`
					h1 {
						color: blue;
					}
				`}
			</style>
			<ul>
				{characters.results.map((character) => (
					<li key={character.id}>
						<Link
							href="/character/[slug]/"
							as={`/character/${slug(character.name)}-${character.id}`}
						>
							<a>{character.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	);
}
export async function getStaticProps() {
	const data = await fetch("https://rickandmortyapi.com/api/character");
	const characters = await data.json();
	console.log(characters);

	return {
		props: {
			characters,
		}, // will be passed to the page component as props
	};
}

export default HomePage;
