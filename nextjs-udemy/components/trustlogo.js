import React from "react";
import styles from "../styles/components/trustlogo.module.scss";

const Trustlogo = () => {
	return (
		<div className={styles.trust_logos}>
			<div className="container">
				<div className={styles.logo_box}>
					<h3>TRUSTED AND USED BY THE PROFESSIONALS AT</h3>
					<div className={styles.logos}>
						<img src="https://assets.circleboom.com/website/images/brands/netflix.svg" />
						<img src="https://assets.circleboom.com/website/images/brands/unicef.svg" />
						<img src="https://assets.circleboom.com/website/images/brands/applebees.svg" />
						<img src="https://assets.circleboom.com/website/images/brands/soundcloud.svg" />
						<img src="https://assets.circleboom.com/website/images/brands/loreal.svg" />
						<img src="https://assets.circleboom.com/website/images/brands/nbc.svg" />
						<img src="https://assets.circleboom.com/website/images/brands/bayer.svg" />
						<img src="https://assets.circleboom.com/website/images/brands/roche.svg" />
						<img src="https://assets.circleboom.com/website/images/brands/euronews.svg" />
						<img src="https://assets.circleboom.com/website/images/brands/intercom.svg" />
						<img src="https://assets.circleboom.com/website/images/brands/unnews.svg" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trustlogo;
