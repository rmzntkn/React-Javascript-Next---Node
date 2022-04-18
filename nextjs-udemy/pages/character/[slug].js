import unfetch from "isomorphic-unfetch";
import slug from "slug";

function CharacterDetail({ character }) {
	return <h1>{character.PageTitle}</h1>;
}

export async function getStaticPaths() {
	const data = await unfetch("https://mweb-api.circleboom.com/landing-pages/");
	const characters = await data.json();

	const paths = characters.map((character) => {
		return { params: { slug: `${slug(character.URL)}-${character.id}` } };
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
