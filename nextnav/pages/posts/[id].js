import { Layout } from "../../componens/layout";

export default function Post(data) {
	return (
		<>
			<img src={data.image}></img>
			<h1>{data.name}</h1>
			<h1>{data.gender}</h1>
			<h1>Status:{data.status}</h1>
		</>
	);
}

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(`https://rickandmortyapi.com/api/character/` + id);
	const data = await res.json();
	console.log(data);

	return {
		props: data,
	};
};

export const getStaticPaths = async () => {
	const res = await fetch("https://rickandmortyapi.com/api/character/");
	const data = await res.json();

	const paths = data.results.map((character) => {
		return {
			params: { id: character.id.toString() },
		};
	});
	return {
		paths,
		fallback: false,
	};
};
