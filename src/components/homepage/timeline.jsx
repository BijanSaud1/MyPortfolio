import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/timeline.css";

const Timeline = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="homepage-timeline">
				<div className="homepage-timeline-content">
					<div className="homepage-timeline-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-timeline-title">{title}</div>
					<div className="homepage-timeline-description">
						{description}
					</div>
					<div className="homepage-timeline-link">
						<Link to={link}>
							Read timeline{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Timeline;
