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
					<div className="paragraph">I joined University of Dallas, Majoring in Computer Science. I learn Racker Programming Language at the University.</div>
					
					<div>
					<h4 className="">SKILLS</h4>
						<ul>
							<li>Object- Oriented Programming</li>
							<li>Racket Programming Language</li>
							<li>Algorithm and Data Structure</li>
						

						</ul>
					</div>
					<img
						src="https://www.shutterstock.com/image-vector/group-people-laughing-lol-isolated-vector-1390409888"
						alt="NoImage"
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
					<div>
						<h3>SKILLS</h3>
						<ul>
							<li>Object Oriented Programming Language</li>
							<li>Data Structures and Algorithm</li>
							<li>Assembly Level Language</li>
							<li>Operating System</li>
							<li>Information Security: <strong>Awaiting Certification</strong></li>
							<li>Database and SQL-Query Language</li>
							<li>Software Design Patterns</li>
							<li>Project Management</li>
						</ul>
					</div>
					<img
						src="https://www.shutterstock.com/image-vector/group-people-laughing-lol-isolated-vector-1390409888"
						alt="NoImage"
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
					<div className="paragraph">I will graduate in December of 2023 from University of Texas At Arlington with a Bachelors Degree.</div>
					<img
						src="https://www.shutterstock.com/image-vector/group-people-laughing-lol-isolated-vector-1390409888"
						alt="NoImage"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}




const myTimelines = [timeline_1, timeline_2, timeline_3,timeline_4];

export default myTimelines;
