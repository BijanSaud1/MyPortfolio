import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Timeline from "../components/timelines/timeline";

import INFO from "../data/user";
import SEO from "../data/seo";
import myTimelines from "../data/timelines";

import "./styles/timelines.css";

const Timelines = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "timelines");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Timelines | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="timelines" />
				<div className="content-wrapper">
					<div className="timelines-logo-container">
						<div className="timelines-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="timelines-main-container">
						<div className="title timelines-title">
							{INFO.timelines.title}
						</div>

						<div className="subtitle timelines-subtitle">
							{INFO.timelines.description}
						</div>

						<div className="timelines-container">
							<div className="timelines-wrapper">
								{myTimelines.map((timeline, index) => (
									<div
										className="timelines-timeline"
										key={(index + 1).toString()}
									>
										<Timeline
											key={(index + 1).toString()}
											date={timeline().date}
											title={timeline().title}
											description={timeline().description}
											link={"/timeline/" + (index + 1)}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Timelines;
