import React from "react";

function timeline_1() {
	return {
		date: "June 2018",
		title: "Completed my A-Levels",
		description:
			"Studies A-Levels from 2016 - 2018",
		keywords: [
			"Deployment",
			"Bijan",
			"Bijan Saud",
		],
		style: `
				.timeline-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="timeline-content">
					<div className="paragraph">I Completed my A-Levels from St.Xaiers College in Nepal.</div>
					<img
						src="./college.jpg"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function timeline_2() {
	return {
		date: "2019",
		title: "Joined University of Dallas ",
		description:
			"Studied Bachelors in Arts Major in Computer Science",
		keywords: [
				"Deployment",
				"Bijan",
				"Bijan Saud",
			],
		style: `
					.timeline-content {
						display: flex;
						flex-direction: column;
						align-items: center;
					}
	
					.randImage {
						align-self: center;
						outline: 2px solid red;
					}
					`,
		body: (
			<React.Fragment>
				<div className="timeline-content">
					<div className="paragraph"></div>
					<img
						src="https://www.shutterstock.com/image-vector/group-people-laughing-lol-isolated-vector-1390409888"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function timeline_3() {
	return {
		date: "2021",
		title: "Transferred to University of Texas At Arlington ",
		description:
			"Studied Bacholers in Engineering Major in Software Engineering",
		keywords: [
				"Deployment",
				"Bijan",
				"Bijan Saud",
			],
		style: `
					.timeline-content {
						display: flex;
						flex-direction: column;
						align-items: center;
					}
	
					.randImage {
						align-self: center;
						outline: 2px solid red;
					}
					`,
		body: (
			<React.Fragment>
				<div className="timeline-content">
					<div className="paragraph"></div>
					<img
						src="https://www.shutterstock.com/image-vector/group-people-laughing-lol-isolated-vector-1390409888"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function timeline_4() {
	return {
		date: "December 2023",
		title: "Expected Graduation ! ! !",
		description:
			"Seeking opportunities in Software Developement, Software Architectural Design, Full Stack Development, Web Development, BackEnd Development, Mobile Application Development, and Microservices Development",
		keywords: [
				"Deployment",
				"Bijan",
				"Bijan Saud",
			],
		style: `
					.timeline-content {
						display: flex;
						flex-direction: column;
						align-items: center;
					}
	
					.randImage {
						align-self: center;
						outline: 2px solid red;
					}
					`,
		body: (
			<React.Fragment>
				<div className="timeline-content">
					<div className="paragraph"></div>
					<img
						src="https://www.shutterstock.com/image-vector/group-people-laughing-lol-isolated-vector-1390409888"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}




const myTimelines = [timeline_1, timeline_2, timeline_3,timeline_4];

export default myTimelines;
