import "../styles/core/global.vars.scss";
import "../styles/app.scss";

import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
