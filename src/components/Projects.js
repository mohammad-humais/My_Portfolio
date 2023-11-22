import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My portfolio features diverse projects reflecting my passion for innovation and effective problem-solving. With a multidisciplinary approach, I excel in user-friendly design, efficient algorithms, and robust backend systems. Each project demonstrates my commitment to impactful solutions, showcasing both technical skills and a dedication to making a meaningful difference</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Sell Digital</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">AuctionNinja</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Robotic process automation</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      {/* <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row> */}
                      <p>Developed platform facilitating the buying and selling of social media accounts (Facebook, Instagram, TikTok, YouTube, etc.) Utilized the MERN (MongoDB, Express.js, React, Node.js) stack to build the platform, ensuring scalability, efficiency, and a seamless user experience. Implemented user-friendly interfaces for sellers to list their accounts, set prices, and manage their listings. Enabled buyers to browse, search, and make offers on social media accounts securely through the platform. Designed and integrated an admin portal for efficient management of user accounts, listings, transactions, and payments. Contact Skills Languages Leveraged leading payment gateways to facilitate secure transactions on the platform.</p>

                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>This project offers trending features, allowing buyers to explore products with the highest number of bids. Buyers can also utilize smart filters to search for products by categories, title, brand, and price range. It supported two types of bidding: open bid (seller decides when to finish) and live bid (1-7 days to close). Buyers can place bids on any product of interest. We utilized Bayesian algorithm to provide personalized recommendations to buyers. Buyers can rate and provide reviews for the products they have won. We iplemented a price suggestion feature based on extensive data analysis, assisting sellers in setting the initial bid price.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I am currently leading the development of a Robotic Process Automation (RPA) solution for a prominent company in the USA. Leveraging Microsoft Power Automate across both cloud and desktop platforms, my focus is on streamlining critical business processes. This includes the automation of tasks such as order information storage, seamless generation of return orders, and the handling of payments within the SAP framework. The integration of RPA technologies is poised to significantly enhance operational efficiency and accuracy, ultimately contributing to the company's overall productivity and success.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
