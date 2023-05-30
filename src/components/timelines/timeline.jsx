import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/timeline.css";

const Timeline = (props) => {
	const { date, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="timeline">
				<div className="timeline-left-side">
					<div className="timeline-date">{date}</div>
				</div>

				<Link to={link}>
					<div className="timeline-right-side">
						<div className="timeline-title">{title}</div>
						<div className="timeline-description">{description}</div>
						<div className="timeline-link">
							More...{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Timeline;
