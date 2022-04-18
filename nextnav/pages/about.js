import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "../componens/layout";
import styles from "../styles/Home.module.css";

export default function About({ characters, section }) {
	return (
		<>
			<Layout simpson={characters} section={section}></Layout>
			<h1>ABOUT</h1>
		</>
	);
}

export async function getStaticProps() {
	const data = await fetch("https://rickandmortyapi.com/api/character/");
	const characters = await data.json();

	return {
		props: {
			characters,
			section: "about",
		},
	};
}
