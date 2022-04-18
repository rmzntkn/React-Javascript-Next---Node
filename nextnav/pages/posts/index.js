import Link from "next/link";
import React from "react";

const index = (data) => {
	return (
		<div>
			{data.results.map((character) => (
				<Link href={"/posts/" + character.id} key={character.id}>
					<a>
						<h3>{character.name}</h3>
					</a>
				</Link>
			))}
		</div>
	);
};

export default index;

export const getStaticProps = async () => {
	const res = await fetch("https://rickandmortyapi.com/api/character/");
	const data = await res.json();

	return {
		props: data,
	};
};
