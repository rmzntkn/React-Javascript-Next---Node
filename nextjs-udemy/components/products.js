import Link from "next/link";
import React from "react";
import styles from "../styles/components/products.module.scss";

export const Products = () => {
	return (
		<>
			<div className={styles.product_boxes}>
				<div className="container">
					<div className={styles.products}>
						<div className={styles.mobile_design}>
							<img src="https://assets.circleboom.com/website/images/product_publish.svg" />
						</div>
						<div className={styles.management}>
							<img src="https://assets.circleboom.com/website/images/circleboom_publish.svg" />
							<h4>
								<span>
									The most intuitive<br></br>
								</span>
								Social Media Management Tool
							</h4>
							<p>
								Design, Plan, Automate and post or schedule your social media
								contents in one place.
							</p>
							<Link href="/">
								<a>Explore</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
