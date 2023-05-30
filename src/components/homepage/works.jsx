import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{/* <div className="work">
							<img
								src="./utswork.png"
								alt="University of Texas System"
								className="work-image"
							/>
							<div className="work-title">University of Texas System</div>
							<div className="work-subtitle">
								Project Coordinator
							</div>
							<div className="work-duration">Current Position</div>
						</div> */}

						<div className="work">
							<img
								src="./utawork.png"
								alt="University of Texas At Arlington"
								className="work-image"
							/>
							<div className="work-title">University of Texas At Arlington</div>
							<div className="work-subtitle">
								Tutor | Calculus II
							</div>
							<div className="work-duration">01-2022 - 12-2022</div>
						</div>

						<div className="work">
							<img
								src="./kmcwork.png"
								alt="Kathmadu_Metropolitian_City"
								className="work-image"
							/>
							<div className="work-title">Kathmandu Metropolitan City</div>
							<div className="work-subtitle">
								Assistant to the Officer
							</div>
							<div className="work-duration">01-2018 - 01-2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
