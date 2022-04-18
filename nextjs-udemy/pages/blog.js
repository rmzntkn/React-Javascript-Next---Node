import Layout from "../components/layout";
import Head from "next/head";
import unfetch from "isomorphic-unfetch";
import slug from "slug";
import Link from "next/link";

function CharacterDetail({ characters }) {
	console.warn("rest");
	return (
		<>
			<Head>
				<title>Blog</title>
			</Head>
			<>
				<Link
					href="/character/[slug]"
					as={`/character/${slug(characters.hero)}-${characters.id}`}
				>
					<a>
						{characters.map((ele) => (
							<li>{ele.HERO.H1}</li>
						))}
					</a>
				</Link>
			</>
		</>
	);
}

export async function getStaticProps() {
	const data = await unfetch("https://mweb-api.circleboom.com/landing-pages/");
	const characters = await data.json();

	return {
		props: {
			characters,
		},
	};
}

export default CharacterDetail;
