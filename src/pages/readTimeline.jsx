import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myTimelines from "../data/timelines";

import "./styles/readTimeline.css";

let TimelineStyle = styled.div``;

const ReadTimeline = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const timeline = myTimelines[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [timeline]);

	TimelineStyle = styled.div`
		${timeline().style}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${timeline().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={timeline().description} />
				<meta name="keywords" content={timeline().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-timeline-logo-container">
						<div className="read-timeline-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-timeline-container">
						<div className="read-timeline-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-timeline-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-timeline-wrapper">
							<div className="read-timeline-date-container">
								<div className="read-timeline-date">
									{timeline().date}
								</div>
							</div>

							<div className="title read-timeline-title">
								{timeline().title}
							</div>

							<div className="read-timeline-body">
								<TimelineStyle>{timeline().body}</TimelineStyle>
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

export default ReadTimeline;
