import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import Card from "../components/common/card";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>

								<Card className="card-skills"
								icon={faBriefcase}
								title="Skills"
								body={
								<div>
									<div className="work">
										
										<div>
										Java EE | React JS | Web Development (HTML, CSS, JavaScript) |
										JPA (Hibernate) | React JS | Node JS | C# | Python | C++ |
										Java Spring Boot | Integration Framework (REST API) |
										PowerBI Dashboard | SQL | NO-SQL | Design Pattern | 
										Project Tracking | Resource Allocation | Design Patterns
									
										</div>
									</div>
									<div className="work">
									Java Spring Boot |  Integration Framework (REST API) | Junit | Mockito
									</div>
									<div>
										Maven Development Tools | CRUD | Dependency Injection | Inversion Of Control |
										JPA | JDBC | Docker | CI/CD | Unreal Engine | Design Patterns | UML Notations | 
										Use case Diagram | MVC Design Model | GitHub | Presentation Skills |
										Project Coordination | Project Planning | Resource Allocation | Project Management
									</div>

					
									
								</div>
								
								
								}
								/>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
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

export default About;
