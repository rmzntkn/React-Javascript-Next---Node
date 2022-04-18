import React from "react";
import styles from "../styles/components/how.module.scss";

export const How = () => {
	return (
		<div className={styles.how}>
			<div className="container">
				<div className={styles.product_head}>
					<h3>
						How we <strong>Design</strong> and <strong>Create</strong> Products
					</h3>

					<p>
						Circleboom helps users to strengthen their social circle! We believe
						that any social media account can grow beyond its owner's
						expectations if handled with the right tools. Here is how we create
						easy-to-use, genuine tools for our users;
					</p>
					<div className={styles.product_box}>
						<h4>01 Keep it simple</h4>
						<p>
							We're fond of the Pareto's Principle (80/20 rule)! Our first rule
							is "create features will be used," hence we do not add any
							sophisticated features that most of our users are not using but
							paying for them.
						</p>
						<div className={styles.selection}>
							<h4>02 Intuitive Design</h4>
							<p>
								By keeping everything simple, we achieve creating intuitive
								designs. We design our products that our users would use without
								any education, and they'd know what to do as soon as they logged
								in.
							</p>
						</div>
						<h4>03 Lagom är bäst *</h4>
						<p>
							We develop the right feature sets to be used by most social media
							users. So, you pay for just what you need! (*) Just the right
							amount is best. (in Swedish)
							<span>(*) Just the right amount is best. (in Swedish)</span>
						</p>
					</div>
				</div>
				<div className={styles.products}>
					<h3>Circleboom Products</h3>
					<p>
						We create social media products for brands, SMBs and users to grow
						and strengthen their social network. And we’re good at creating
						intuitive and <strong>easy-to-use products.</strong> Here are the
						products we’ve created until now
					</p>
				</div>
			</div>
		</div>
	);
};
