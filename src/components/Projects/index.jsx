import { projects } from "../../data"
import ProjectCard from "../../ui/ProjectCard"
import "./Projects.css"
import { Link } from "react-router-dom"

const Projects = () => {
  return (
    <section id="projects">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">Projects</h2>
        </div>
        <div className="projects__container">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>
        <div className="view-more-wrapper" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/projects" className="view-more-btn">View More</Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
