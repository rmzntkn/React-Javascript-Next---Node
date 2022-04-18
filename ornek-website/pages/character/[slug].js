import Layout from "../../components/layout";
import Head from "next/head";
import unfetch from "isomorphic-unfetch";
import slug from "slug";

function CharacterDetail({ character }) {
	return (
		<Layout>
			<Head>
				<title>Ana sayfa</title>
			</Head>

			<h1>{character.PageTitle}</h1>
			<h2>{character.TOOL} TOOL</h2>
		</Layout>
	);
}

export async function getStaticPaths() {
	const data = await unfetch("https://mweb-api.circleboom.com/landing-pages/");
	const characters = await data.json();
	console.log(characters);

	const paths = characters.map((character) => {
		return { params: { slug: `${slug(character.PageTitle)}-${character.id}` } };
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const id = params.slug.split("-").slice(-1)[0];
	const data = await unfetch(
		"https://mweb-api.circleboom.com/landing-pages/" + id
	);
	const character = await data.json();

	return {
		props: {
			character,
		},
	};
}

export default CharacterDetail;
