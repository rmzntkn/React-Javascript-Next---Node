import "../styles/core/global.vars.scss";
import "../styles/app.scss";
import { Layout } from "../componens/layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
