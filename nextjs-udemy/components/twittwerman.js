import Link from "next/link";
import React from "react";
import styles from "../styles/components/twitterman.module.scss";

export const Twitterman = () => {
	return (
		<>
			<div className={styles.product_boxes}>
				<div className="container">
					<div className={styles.products}>
						<div className={styles.management}>
							<img src="https://assets.circleboom.com/website/images/circleboom_twitter.svg" />
							<h4>
								<span>
									The most intuitive<br></br>
								</span>
								Twitter Management Tool
							</h4>
							<p>
								Design, Plan, Automate and post or schedule your social media
								contents in one place.
							</p>
							<Link href="/">
								<a>Explore</a>
							</Link>
						</div>
						<div className={styles.mobile_design}>
							<img src="https://assets.circleboom.com/website/images/product_twitter.svg" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
