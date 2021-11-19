import Layout from "../../components/layout";
import { useRouter } from "next/router";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import slug from "slug";

function CharacterDetail({ character }) {
	return (
		<Layout>
			<Head>
				<title>Home </title>
			</Head>
			<h1>{character.name} </h1>
			<figure>
				<img src={character.image} alt={character.name} />
			</figure>
		</Layout>
	);
}
export async function getStaticPaths() {
	const data = await fetch("https://rickandmortyapi.com/api/character");
	const characters = await data.json();
	const paths = characters.results.map((character) => {
		return { params: { slug: `${slug(character.name)}-${character.id}` } };
	});
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	console.log(params.slug);
	const id = params.slug.split("-").slice(-1)[0];
	const data = await fetch("https://rickandmortyapi.com/api/character/" + id);
	const character = await data.json();

	return {
		props: {
			character,
		}, // will be passed to the page component as props
	};
}

export default CharacterDetail;
